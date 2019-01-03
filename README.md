# Typescript Node Starter
A simple starter for a Node.js server with TypeScript, Express, Mongoose, RxJS, Moment and TypeScript REST, enables hot reload with debug support for VSCode

# How to debug
ts-node-dev is used to run the server with hot reload so the project restarts every time we edit and save a file.

ts-node-dev allows us also to attach a debugger, VSCode is used for debugging and an initial configuration is provided inside .vscode/launch.json

In order to debug follow the following steps:

1. Clone this repo.
2. Run npm install in project folder.
3. Run npm run dev in project folder.
4. Navigate to Debug view in VSCode.
5. Run Attach Typescript Server debug configuration to attach the debugger to the running node process.

# Additional information
There are multiple libraries added that i use in almost all my node projects.

This repo uses the following libraires:

- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js.
- [Typescript REST](https://github.com/thiagobustamante/typescript-rest#readme): Lightweight annotation-based Express.js extension for Typescript.
- [Moment](https://momentjs.com/): Parse, validate, manipulate, and display dates and times in JavaScript.
- [Lodash](https://lodash.com/): A modern JavaScript utility library delivering modularity, performance & extras.
- [RxJS](https://rxjs-dev.firebaseapp.com/): A library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.
- [Mongoose](https://mongoosejs.com/): Alegant mongodb object modeling for Node.js.
