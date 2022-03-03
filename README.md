# Node.js service setup

## Content navigation

- [Description](#description)
- [Definitions](#definitions)
- [Prerequisites](#prerequisites)
- [Folder structure](#folder-structure)
- [Useful commands](#useful-commands)
- [Steps to reproduce this boilerplate](#steps-to-reproduce-this-boilerplate)
  - [Creating a new project](#creating-a-new-project)
  - [Adding Typescript to the project](#adding-typescript-to-the-project)
  - [Running Typescript](#running-typescript)
  - [Adding Eslint to a project](#adding-eslint-to-a-project)
  - [Adding Prettier to a project](#adding-prettier-to-a-project)
- [Common issues](#common-issues)
- [License](#license)

## Description

This is a Node.js project setup with:
- Express.js
- Typescript
- Eslint (with airbnb style guide)
- Prettier (combined with ESLint)
- VSCode IDE settings (optional)

additionally the project contains:
- example folder structure
- nodemon
- dotenv

Node.js version I am using is shown in .nvmrc file.

> Info: To save your Node.js version to file run following command: `node -v > .nvmrc`

## Definitions

**Node.js** is a run-time environment that makes it possible to write server-side JavaScript. It has gained widespread adoption since its release in 2011. Writing server-side JavaScript can be challenging as a codebase grows due to the nature of the JavaScript language: dynamic and weak typed.

**TypeScript** is a typed (optional) super-set of JavaScript that can help with building and managing large-scale JavaScript projects. It can be thought of as JavaScript with additional features like strong static typing, compilation, and object oriented programming.

Note: TypeScript is technically a super-set of JavaScript, which means that all JavaScript code is valid TypeScript code.

Here are some benefits of using TypeScript:

- Optional static typing.
- Type inference.
- Ability to use Interfaces.

The source of the above definitions: [link](https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript).

## Prerequisites

You need to have Node.js installed on your system. You can download it from official Node.js website [nodejs.org](https://nodejs.org/en/). You can also find out how to install Node.js using different methods, on different operating systems here: [nodejs.dev](https://nodejs.dev/learn/how-to-install-nodejs).

## Folder structure

    .
    ├── dist                  # Minimized code which is used on production
    ├── src                   # Raw non-minified code
    │   └── config
    │   └── controllers
    │   └── middleware
    │   └── models
    │   └── repositories
    │   └── routes
    │   └── services
    │   └── app.js
    └── ...

## Useful commands

- Running TypeScript compiler: `npm run tsc`
- Running node server with TypeScript compiler in a watch mode: `npm run dev`
- Running node server (compiled code from dist folder): `npm start`
- Running linter: `npm run lint`
- Running linter fix: `npm run lint:fix`

## Steps to reproduce this boilerplate (for curious people)

### Creating a new project

1. Open terminal and create a project named **nodejs-setup** by running command:
```
mkdir nodejs-setup
```

2. Go to project directory by running command:
```
cd nodejs-setup
```

3. Initialize node.js project by running command:
```
npm init -y
```

### Adding Typescript to the project

4. Install Typescript (as a devDependency) by running command:
```
npm i -D typescript
```
> Info: `i` is a shorthand for `install` and `-D` is a shorthand for `--save-dev`.

5. Create a tsconfig.json running command:
```
npx tsc --init
```

> Info: You can create tsconfig config file with .json or .js extension.

6. Add to tsconfig.json file following content:
```
{
  "compilerOptions": {
    "target": "es2015",
    "module": "commonjs",
    "rootDir": "./src",
    "moduleResolution": "node",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```

This is only an example of Typescript configuration. You can always change it or you can use one of the ready-made ones from this [repository](https://github.com/tsconfig/bases).

> Info: find out more about [typescript configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

### Running Typescript

7. Run typescript in a project using command:
```
npx tsc
```

After running this command you will see if there are any errors and if there are not your compiled files will occur in ./dist folder.

### Adding Eslint to a project

8. Add ESLint to a project running command:
```
npm i -D eslint
npm init @eslint/config
```

> Info: Run ESLint using command: `./node_modules/.bin/eslint ./src/**/*` or `npx eslint <file_path>`

> Info: Fix code using ESLint running command: `./node_modules/.bin/eslint ./src/**/* --fix`

> Info: If you are using VSCode IDE and have installed ESLint package, VSCode with underline scripts where error or warning occurred.

### Adding Prettier to a project

9. Add Prettier to a project running command:
```
npm i -D --save-exact prettier eslint-config-prettier eslint-plugin-prettier
npm i -D eslint-config-prettier eslint-plugin-prettier
```
and add to eslintrc.json:
```
"extends": [
    "plugin:prettier/recommended"
]
```
and add your custom prettier options to .prettierrc.json file.

### Adding VSCode packages and changing VSCode settings.json

10. (optional) If you are using VSCode IDE you can install following packages to make your work easier with Eslint and Prettier:
- ESLint ([marketplace](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint))
- Prettier - Code formatter ([marketplace](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode))

VSCode settings.json with some ESLint & Prettier options below.

Set ESLint as a default formatter for VSCode:
```
"editor.defaultFormatter": "dbaeumer.vscode-eslint"
```

You can also set ESLint as a default formatter by a specific language:
```
"[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
}
```

Enable/disable ESLint for the workspace folder. Is enabled by default:
```
"eslint.enable": true
```

Enable ESLint as a formatter for validated files:
```
"eslint.format.enable": true
```

An array of language identifiers specifying the files for which validation is to be enforced:
```
"eslint.validate": [
    "javascript",
    "html"
]
```

Turn on/off ESLint auto fix on file save:
```
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

### VSCode settings.json summary
```
"editor.defaultFormatter": "dbaeumer.vscode-eslint",
"[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"eslint.enable": true,
"eslint.format.enable": true,
"eslint.validate": [
    "javascript",
    "html"
],
"editor.formatOnSave": true,
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true
}
```

## Common issues

### ESLint or prettier not working in VSCode after changing VSCode or ESLint settings.

- Restart VSCode IDE and your services.


## License

This project is licensed under the terms of the MIT license.