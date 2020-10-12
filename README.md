# React Webpack Typescript Starter
> Minimal starter with hot module replacement (HMR) for rapid development.

* **[React](https://facebook.github.io/react/)** (16.x)
* **[Webpack](https://webpack.js.org/)** (4.x)
* **[Typescript](https://www.typescriptlang.org/)** (3.x)
* **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** ([React Hot Loader](https://github.com/gaearon/react-hot-loader))
* Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))

## Installation
1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage
**Development**

`yarn run start`

* Build app continuously (HMR enabled)
* App served @ `http://localhost:8080`

---

**All commands**

Command | Description
--- | ---
`yarn run start` | Build app continuously (HMR enabled) and serve @ `http://localhost:8080`
`yarn run build` | Build app to `/dist/`
`yarn run lint` | Run linter
`yarn run lint --fix` | Run linter and fix issues

**Note**: replace `yarn` with `npm` in `package.json` if you use npm.