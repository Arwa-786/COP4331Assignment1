// Integration tests: send real HTTP requests to the PHP API backed by MySQL.
// They only run when API_URL is set (the CI workflow sets it).
const API_URL = process.env.API_URL;
const describeIfApi = API_URL ? describe : describe.skip;

async function postJson(endpoint, body)
{
	const response = await fetch(`${API_URL}/${endpoint}`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body)
	});
	return response;
}

describeIfApi("Login.php", () => {
	test("returns user info as JSON for a valid login", async () => {
		const response = await postJson("Login.php", { login: "testuser", password: "testpass" });

		expect(response.status).toBe(200);
		expect(response.headers.get("content-type")).toContain("application/json");

		const data = await response.json();
		expect(data).toEqual({
			id: expect.any(Number),
			firstName: "Test",
			lastName: "User",
			error: ""
		});
		expect(data.id).toBeGreaterThan(0);
	});

	test("returns an error for a wrong password", async () => {
		const response = await postJson("Login.php", { login: "testuser", password: "wrong" });
		const data = await response.json();

		expect(data.id).toBe(0);
		expect(data.error).toBe("No Records Found");
	});
});

describeIfApi("AddColor.php and SearchColors.php", () => {
	test("a color that was added can be found by search", async () => {
		const addResponse = await postJson("AddColor.php", { color: "Teal", userId: 1 });
		const addData = await addResponse.json();
		expect(addData.error).toBe("");

		const searchResponse = await postJson("SearchColors.php", { search: "Tea", userId: 1 });
		const searchData = await searchResponse.json();
		expect(Array.isArray(searchData.results)).toBe(true);
		expect(searchData.results).toContain("Teal");
	});
});
