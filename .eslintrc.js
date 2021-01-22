module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/essential",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint",
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		// 自动保存fix格式时，vue会使用prettierrc里属性，js/ts文件使用eslint文件
		// eslint、prettier规范化冲突修改需要在这里加
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				trailingComma: "es5", // 多行时，尽可能打印尾随的逗号
				bracketSpacing: true,
			},
		],
		"vue/html-self-closing": [
			"error",
			{
				html: {
					void: "any",
				},
			},
		],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"@typescript-eslint/no-explicit-any": "off",
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error"],
	},
};
