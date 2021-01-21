# vscode + tslint

## tslint

官网已被弃，建议eslint

[tslint官方地址](https://palantir.github.io/tslint/)

[最新实践](https://github.com/typescript-eslint/typescript-eslint#getting-started--installation)

## vscode安装Tslint插件
[文档地址](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

## npm安装必要插件
 
```
npm i tslint typescript -g
```

## 工作区项目

[文档地址](https://github.com/Microsoft/typescript-tslint-plugin)

`npm install typescript-tslint-plugin`

`配置tsconfig.json`

```
{
  "compilerOptions": {
    "plugins": [
      { "name": "typescript-tslint-plugin" }
    ]
  }
}
```