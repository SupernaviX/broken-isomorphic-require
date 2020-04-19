To reproduce the bug,
1. run `npm install`
2. run `node app.js`
3. open localhost in a browser

First off, snowpack throws a warning during install:
```
× 'util' is imported by 'node_modules\@wasmer\io-devices\lib\index.esm.js', but could not be resolved.
  'util' is a Node.js builtin module that won't exist in the browser.
  Find a more web-friendly alternative, or add the "rollup-plugin-node-polyfills" plugin to your Snowpack config file.
× 'util' is imported by ' util?commonjs-external', but could not be resolved.
  'util' is a Node.js builtin module that won't exist in the browser.
  Find a more web-friendly alternative, or add the "rollup-plugin-node-polyfills" plugin to your Snowpack config file.
```

Second off, the browser throws an error when you load localhost:

Uncaught TypeError: Failed to resolve module specifier "util". Relative references must start with either "/", "./", or "../".

The code snippet triggering this is [here](https://github.com/wasmerio/wasmer-js/blob/f1458440f2ab9e5e440ade5d5ff3e77ac3d5927f/packages/io-devices/src/index.ts#L6-L14) and looks correct.