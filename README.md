- Redux is used to store and retrieve stored data, but not call API's.
- Redux can be called inside `mapController`.
- Every interaction with ESRI API should be done using `mapController.js` file.
- `mapController` has acceess to a number of properties which are used to interact with map. For example, `map` and `mapview` are exposed through `_map` and `_mapview`.
- If you need to access certain ESRI API, e.g get layer info, you can write a helper function and export it inside controller that takes in layer id and returns layer info, thus not directly exposing `map` to a specific component, but containing it within the controller.

---

## Get Started (Node version 10 or higher)

You can use `yarn` or `npm` to get started.

1. `npm install`
2. `npm run start`

Application should open in localhost

# npm/yarn Scripts

Bundles, serves, and deploys application in development environment to an S3 bucket using the Blue Raster AWS account. Watches for changes in `src` and `webpack.config.js`

- `npm run build`
- `yarn run build`

Bundles application in production environment. Consist of additional [Webpack](https://webpack.js.org/ 'Webpack') processes such as minifying, extracting CSS and gzip.

- `npm run debug`
- `yarn run debug`

  Runs node debugger to inspect issues with [Webpack](https://webpack.js.org/ 'Webpack').

- `npm run lint:js`
- `yarn run lint:js`

  Lints `*.js` files in `app` folder using according to specifications in `.eslintrc` file.

- `npm run fix:lint:js`
- `yarn run fix:lint:js`

  Fixes lint errors.

- `npm run clean:build`
- `yarn run clean:build`

  Deletes contents of `build` folder

## Development

---

Application utilizes [React](https://facebook.github.io/react/ 'React') for building user interfaces, [Redux](http://redux.js.org/ 'Redux') for state management.
