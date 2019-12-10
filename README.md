# Typescript开发环境搭建：

### 开发环境：
 
操作系统： Mac/Win
IDE:VsCode
SDK：nodejs 10及以上

Node 官网：http://nodejs.cn/download/
VScode 官网：https://code.visualstudio.com/
Typescript 官网： http://www.typescriptlang.org/

###  使用vscode调试开发 typescript

####  1. 开发工具包的全局安装

执行命令：
`sudo npm install -g typescript`
`sudo npm install -g nrm`
`sudo npm install -g nodemon`
`sudo npm install -g ts-node`
`sudo npm install -g pm2`
`sudo npm install -g n`

####  2. 初始化项目
`mkdir demo && cd demo`
`npm init #生成package.json`
`tsc --init #生成tsconfig.json`

#### 3.安装类型定义文件
`npm install typescript --save-dev`
`npm install @types/node --save-dev`
`code ../demo #用vscode 打开项目`

#### 4.修改tsconfig.json
```json

{
"compilerOptions": {
		"target": "es2017",
		"module": "commonjs",
		"sourceMap": true,
		"outDir": "./dist",
		"strict": true,
		"noImplicitAny": true,
		"strictNullChecks": false,
		"allowSyntheticDefaultImports": true,
		"esModuleInterop": true,
		"experimentalDecorators": true,
		"emitDecoratorMetadata": true,
		"forceConsistentCasingInFileNames": true
	}
}
```
 `mkdir src .vscode && touch src/main.ts`



tasks.json :
```json
{
// See https://go.microsoft.com/fwlink/?LinkId=733558
// for the documentation about the tasks.json format
"version": "2.0.0",
"tasks": [
	{
		"type": "typescript",
		"tsconfig": "tsconfig.json",
		"problemMatcher": [
		"$tsc"
		],
		"group": {
		"kind": "build",
		"isDefault": true
		}
	}
  ]
}
```


launch.json:
```json
{
// Use IntelliSense to learn about possible attributes.
// Hover to view descriptions of existing attributes.
// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
"version": "0.2.0",
"configurations": [
		{
			"type": "node",
			"request": "launch",
			"name": "Launch Program",
			"preLaunchTask": "tsc: build - tsconfig.json",
			"program": "${workspaceFolder}/src/main.ts",
			"outFiles": ["${workspaceFolder}/dist/**/*.js"]
		}
]
}
```

拷贝tasks.json和launch.json 到.vscode文件夹
