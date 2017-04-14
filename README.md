# Preybird-Hospitality
This app comes in four themes. To change theme: open `./src/app/style/_main.scss` and replace the **x** in `@import 'theme.x'` with a number from **1** to **4**, and trigger a new build. The default theme has a neutral character, while the others are more colorful.

**Usage**
1. Register a new patient from the landing page
2. List scheduled consultations for a given consultation date
3. Select a consultation and view detailed information



## Prerequisites

Node.js and npm/yarn are essential to Angular development. Use [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/). There is a `yarn.lock` file committed.


## Install npm packages

Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

or

```shell
yarn
yarn start
```

The `npm start` command first compiles the application,
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.
It also starts the Node API.

Shut it down manually with `Ctrl-C`.


### npm scripts

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run build:ng` - runs the TypeScript compiler once.
* `npm run build:watch` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run serve:ng` - runs the lite-server
* `npm test` - compiles, runs and watches the karma unit tests
* `npm run e2e` - compiles and run protractor e2e tests, written in Typescript (*e2e-spec.ts)


### Unit Tests
TypeScript unit-tests are usually in the `src/app` folder. Their filenames must end in `.spec.ts`.

Run it with `npm test`

That command first compiles the application, then simultaneously re-compiles and runs the karma test-runner.
Both the compiler and the karma watch for (different) file changes.

Shut it down manually with `Ctrl-C`.

Test-runner output appears in the terminal window.
We can update our app and our tests in real-time, keeping a weather eye on the console for broken tests.
Karma is occasionally confused and it is often necessary to shut down its browser or even shut the command down (`Ctrl-C`) and
restart it. No worries; it's pretty quick.

### End-to-end (E2E) Tests

E2E tests are in the `e2e` directory, side by side with the `src` folder.
Their filenames must end in `.e2e-spec.ts`.

Thereafter, run them with `npm run e2e`.

That command first compiles, then simultaneously starts the `lite-server` at `localhost:8080`
and launches Protractor.  

The pass/fail test results appear at the bottom of the terminal window.
A custom reporter (see `protractor.config.js`) generates a  `./_test-output/protractor-results.txt` file
which is easier to read; this file is excluded from source control.

Shut it down manually with `Ctrl-C`.