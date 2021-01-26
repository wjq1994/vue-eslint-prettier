# vscode + eslint（目前最佳实践）

## 环境

vscode（v1.52.1） + eslint（安装vetur，全由eslint控制）

vetur主要vue高亮和vue里ts可以点击跳转

## 配置

校验和格式化全由.eslintrc.js文件控制。

> .eslintrc.js 
```javascript
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
				useTabs: false,
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

```

> settings.json
```json
{
  "editor.tabSize": 2,
  "editor.rulers": [
    80
  ],
  "editor.formatOnSave": true, // 在保存时自动格式化
  "editor.formatOnType": false, // 在键入一行后是否自动化格式
  "editor.formatOnPaste": true, // 在粘贴时自动格式化
  // 保存时按照哪个规则进行格式化
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "addMissingImports": true
  },
  "eslint.validate": [
    "vue",
    "typescript"
  ],
  "files.exclude": {
    "**/*.js": {
      "when": "$(basename).ts"
    },
    "**/**.js": {
      "when": "$(basename).tsx"
    },
    "**/*.js.map": true
	},
	// 启用/禁用 TypeScript 验证。控制的是vscode默认的校验
	"typescript.validate.enable": true,
	// 禁用vetur配置
  "vetur.format.enable": false
}
```

## CLI

```json
// 一键修复
npm run lint --fix
```

## typescript-eslint

typescript官方推荐 [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

## gitHooks + lint-staged

git提交代码之前，校验代码

> 正确用法

```json

"gitHooks": {
	"pre-commit": "lint-staged --config ./lint-staged.config.js"
}
```
```javascript
// lint-staged.config.js
// 即校验代码规范和格式化，又校验tsc
module.exports = {
  "*.{js,vue}": () => "npm run lint",
  "**/*.ts?(x)": () => ["npm run lint", "tsc -p tsconfig.json --noEmit"],
};
```
> 错误用法

```json
"gitHooks": {
	"pre-commit": "lint-staged"
},
"lint-staged": {
	"*.{js,vue}": [
		"npm run lint"
	],
	"*.ts?(x)": [
		// 放在package.json里，不起作用？？？，要放到配置文件
		"tsc -p tsconfig.json --noEmit"
	]
},
```