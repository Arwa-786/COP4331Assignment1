import js from "@eslint/js";
import globals from "globals";

export default [
	{
		ignores: ["node_modules/", "public/js/md5.js"]
	},
	js.configs.recommended,
	{
		files: ["public/js/**/*.js"],
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: "script",
			globals: {
				...globals.browser
			}
		},
		rules: {
			// Functions are called from HTML onclick attributes, which ESLint cannot see
			"no-unused-vars": ["error", { "varsIgnorePattern": "^(doLogin|doLogout|addColor|searchColor|readCookie)$" }]
		}
	}
];
