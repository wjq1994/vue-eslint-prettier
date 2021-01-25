# vetur + eslint + prettier

## 环境

vue-cli选择eslint + prettier(可能会少很多配置)

vscode（v1.52.1）开发工具，安装vetur + eslint

# 缺点

vetur + eslint，导致校验是一个配置（eslint），格式化是一个配置（vetur配置会替代eslint），需要维护两份，建议只用eslint

## 功能

> [vetur](https://vuejs.github.io/vetur/)

语法高亮，格式化vue代码

> [eslint](https://eslint.org/)

代码规范化检测，质量检测，只有结合vetur才能识别vue的html、css、javascript(错误的说法，不用vetur也可以)

> [prettier](https://prettier.io/docs/en/index.html)

代码规范化检测，只有结合vetur才能识别vue的html、css、javascript(错误的说法，不用vetur也可以)

## 配置

### `eslint + prettier`

两个核心插件

[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)、[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier);

三个配置文件
```javascript
// .eslintrc.js

module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		"plugin:vue/essential",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint"
	],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		// 自动保存fix格式时，会使用prettierrc里属性
		// eslint语法校验、规范化冲突修改需要在这里加
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				wrapAttributes: true,
				sortAttributes: true,
				bracketSpacing: true
			},
			{
				usePrettierrc: true
			}
		],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
	}
};
```
```javascript
//.prettierrc 也可以在settings.json里配置
{
    useTabs: true,
    trailingComma: none
};

```
```json
// .vscode/settings.json
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
        // .eslintrc.js配置
        "source.fixAll.eslint": true
		},
		// vetor默认prettier，需要和.eslintrc.js一致
    "vetur.format.defaultFormatterOptions": {
        "prettier": {
            // Prettier option here
            "trailingComma": "es5", // 多行时，尽可能打印尾随的逗号
            "useTabs": true, // 是否利用tab替代空格
            "semi": true, // 句尾是否加;
        }
    }
}
```

## CLI

```
// 一键修复
npm run lint --fix
```

## typescript-eslint

typescript官方推荐 [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

## gitHooks + lint-staged

git提交代码之前，校验代码