---
sidebarDepth: 5
---

# TypeScript 安装

## 安装

基于node.js安装（前提安装[node.js](https://nodejs.org/)）

``` bash
npm install -g typescript
```

## 编译

新建一个`helloworld.ts`文件，同级目录下命令行执行：
``` bash
tsc helloworld.ts
```
完成后就会在同级目录生成同名JS文件`helloworld.js`。

开发项目级应用每次都`tsc`进行编译，显然很不方便。下面就需要对项目进行简单配置。

## 开发工具及配置

开发工具：[VSCode](https://code.visualstudio.com/) 同是微软的亲儿子

开始配置：

1. 创建`tsconfig.json`文件，执行命令：

``` bash
tsc --init
```

生成[配置文件](https://github.com/Sogrey/TypeScript-start/blob/master/examples/tsconfig.json).
<details>
<summary>点击查看配置文件</summary>
``` json
{
  "compilerOptions": {
    /* Basic Options */
    // "incremental": true,                   /* Enable incremental compilation */
    "target": "es5",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "commonjs",                     /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */
    // "lib": [],                             /* Specify library files to be included in the compilation. */
    // "allowJs": true,                       /* Allow javascript files to be compiled. */
    // "checkJs": true,                       /* Report errors in .js files. */
    // "jsx": "preserve",                     /* Specify JSX code generation: 'preserve', 'react-native', or 'react'. */
    // "declaration": true,                   /* Generates corresponding '.d.ts' file. */
    // "declarationMap": true,                /* Generates a sourcemap for each corresponding '.d.ts' file. */
    // "sourceMap": true,                     /* Generates corresponding '.map' file. */
    // "outFile": "./",                       /* Concatenate and emit output to single file. */
    "outDir": "./",                        /* Redirect output structure to the directory. */
    // "rootDir": "./",                       /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
    // "composite": true,                     /* Enable project compilation */
    // "tsBuildInfoFile": "./",               /* Specify file to store incremental compilation information */
    // "removeComments": true,                /* Do not emit comments to output. */
    // "noEmit": true,                        /* Do not emit outputs. */
    // "importHelpers": true,                 /* Import emit helpers from 'tslib'. */
    // "downlevelIteration": true,            /* Provide full support for iterables in 'for-of', spread, and destructuring when targeting 'ES5' or 'ES3'. */
    // "isolatedModules": true,               /* Transpile each file as a separate module (similar to 'ts.transpileModule'). */

    /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */

    /* Additional Checks */
    // "noUnusedLocals": true,                /* Report errors on unused locals. */
    // "noUnusedParameters": true,            /* Report errors on unused parameters. */
    // "noImplicitReturns": true,             /* Report error when not all code paths in function return a value. */
    // "noFallthroughCasesInSwitch": true,    /* Report errors for fallthrough cases in switch statement. */

    /* Module Resolution Options */
    // "moduleResolution": "node",            /* Specify module resolution strategy: 'node' (Node.js) or 'classic' (TypeScript pre-1.6). */
    // "baseUrl": "./",                       /* Base directory to resolve non-absolute module names. */
    // "paths": {},                           /* A series of entries which re-map imports to lookup locations relative to the 'baseUrl'. */
    // "rootDirs": [],                        /* List of root folders whose combined content represents the structure of the project at runtime. */
    // "typeRoots": [],                       /* List of folders to include type definitions from. */
    // "types": [],                           /* Type declaration files to be included in compilation. */
    // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */
    // "preserveSymlinks": true,              /* Do not resolve the real path of symlinks. */
    // "allowUmdGlobalAccess": true,          /* Allow accessing UMD globals from modules. */

    /* Source Map Options */
    // "sourceRoot": "",                      /* Specify the location where debugger should locate TypeScript files instead of source locations. */
    // "mapRoot": "",                         /* Specify the location where debugger should locate map files instead of generated locations. */
    // "inlineSourceMap": true,               /* Emit a single file with source maps instead of having a separate file. */
    // "inlineSources": true,                 /* Emit the source alongside the sourcemaps within a single file; requires '--inlineSourceMap' or '--sourceMap' to be set. */

    /* Experimental Options */
    // "experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */
    // "emitDecoratorMetadata": true,         /* Enables experimental support for emitting type metadata for decorators. */

    /* Advanced Options */
    "forceConsistentCasingInFileNames": true  /* Disallow inconsistently-cased references to the same file. */
  }
}
```
</details>

我们放开注释`outDir`设置编译输出目录。

- `"outDir": "./", ` 编辑输出目录，设置成`./`会输出到与`.ts`同级目录下，也方便管理。
- 其他命令后面再研究...


2. 点击菜单 `终端`-`运行任务`输入`tsc`, 点击`tsc:监视-tsconfig.json`,就可以自动生成代码了。

### 编译遇到的问题

按照以上第一步生成配置，修改`outDir`，第二步tsc监视 报如下错误：

```
> Executing task: tsc -p e:\workspace\typescript\TypeScript-start\examples\tsconfig.json --watch <

tsc : 无法加载文件 D:\Program Files\nodejs\node_modules\node_global\tsc.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.mic
rosoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。
所在位置 行:1 字符: 1
+ tsc -p e:\workspace\typescript\TypeScript-start\examples\tsconfig.jso ...
+ ~~~
    + CategoryInfo          : SecurityError: (:) []，PSSecurityException   
    + FullyQualifiedErrorId : UnauthorizedAccess
终端进程已终止，退出代码: 1

终端将被任务重用，按任意键关闭。
```
原因竟是由于我将VSCode的默认终端改成了`Windows PowerShell`,改回`cmd`试试：
```
> Executing task: tsc -p e:\workspace\typescript\TypeScript-start\examples\tsconfig.json --watch <


[1:03:56] Starting compilation in watch mode...

[1:03:59] Found 0 errors. Watching for file changes.
```
竟然成功了,同级目录下生成了同名的`.js`文件。

## 第一个TypeScript应用-Helloworld

创建一个[helloworld.html](https://github.com/Sogrey/TypeScript-start/blob/master/examples/helloworld.html)文件，输入`html:5`回车 快捷生成一个简单页面。
``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world</title>
</head>
<body>
    
</body>
</html>
```
引入`.js`文件：
``` html
<script src="helloworld.js" type="text/javascript"></script>
```
[helloworld.ts](https://github.com/Sogrey/TypeScript-start/blob/master/examples/helloworld.ts)
``` ts
console.log('hello TypeScript!');

var hello:string = 'hello 你好';

document.writeln(hello);
```
即可看到输出结果,生成[对应js文件](https://github.com/Sogrey/TypeScript-start/blob/master/examples/helloworld.js):
``` js
"use strict";
console.log('hello TypeScript!');
var hello = 'hello 你好';
document.writeln(hello);
```
修改`.ts`文件，页面也即是响应更新。