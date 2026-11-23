const { isValidColorName } = require("../../public/js/validation.js");

test("accepts a normal color name", () => {
      expect(isValidColorName("Blue")).toBe(true);
});

test("accepts a color name with a space", () => {
      expect(isValidColorName("Light Blue")).toBe(true);
});

test("rejects an empty string", () => {
      expect(isValidColorName("")).toBe(false);
});

test("rejects only spaces", () => {
      expect(isValidColorName("   ")).toBe(false);
});

test("rejects numbers and symbols", () => {
      expect(isValidColorName("Blue123!")).toBe(false);
});

test("rejects things that are not text", () => {
      expect(isValidColorName(null)).toBe(false);
});

