# ng-changelog
[![Build Status](https://travis-ci.org/luisreinoso/ng-changelog.svg?branch=master)](https://travis-ci.org/luisreinoso/ng-changelog)
>Muestra el changelog de la aplicación mediante un timeline; Show the changelog of the application using a timeline. 

El [changelog](https://github.com/luisreinoso/ng-changelog/blob/master/CHANGELOG.md).

## Estructura
- Library:
    - **src** folder for the classes
    - **public_api.ts** entry point for all public APIs of the package
    - **package.json** _npm_ options
    - **rollup.config.js** _Rollup_ configuration for building the _umd_ bundles
    - **rollup.es.config.js** _Rollup_ configuration for building the _es2015_ bundles
    - **tsconfig-build.json** _ngc_ compiler options for _AoT compilation_
    - **build.js** building process using _ShellJS_
- Testing:
    - **tests** folder for unit & integration tests
    - **karma.conf.js** _Karma_ configuration that uses _webpack_ to build the tests
    - **spec.bundle.js** defines the files used by _webpack_
- Extra:
    - **tslint.json**  _Angular TSLint Preset_ (_TypeScript_ linter rules with _Codelyzer_)
    - **travis.yml** _Travis CI_ configuration

## Testing
The following command runs unit & integration tests that are in the `tests` folder (you can change the folder in `spec.bundle.js` file): 
```Shell
npm test 
```
or in watch mode:
```Shell
npm run test:watch
```
It also reports coverage using _Istanbul_.

## Building
The following command:
```Shell
npm run build
```
- starts _TSLint_ with _Codelyzer_ using _Angular TSLint Preset_
- starts _AoT compilation_ using _ngc_ compiler
- creates `dist` folder with all the files of distribution, following _Angular Package Format (APF) v6.0_:
```
└── dist
    ├── bundles
    |   ├── my-library.umd.js
    |   ├── my-library.umd.js.map
    |   ├── my-library.umd.min.js
    |   └── my-library.umd.min.js.map
    ├── esm5
    |   ├── **/*.js
    |   └── **/*.js.map
    ├── esm2015
    |   ├── **/*.js
    |   └── **/*.js.map
    ├── fesm5
    |   ├── my-library.js
    |   └── my-library.js.map
    ├── fesm2015
    |   ├── my-library.js
    |   └── my-library.js.map
    ├── src
    |   └── **/*.d.ts
    ├── my-library.d.ts
    ├── my-library.metadata.json
    ├── LICENSE
    ├── package.json
    ├── public_api.d.ts
    └── README
```
To test locally the npm package before publishing:
```Shell
npm run pack:lib
```
Then you can install it in an app to test it:
```Shell
npm install [path]my-library-[version].tgz
```

## Publishing
Before publishing the first time:
- you can register your library on [Travis CI](https://travis-ci.org/): you have already configured `.travis.yml` file
- you must have a user on the _npm_ registry: [Publishing npm packages](https://docs.npmjs.com/getting-started/publishing-npm-packages)

```Shell
npm run publish:lib
```

## Documentation
To generate the documentation, this starter uses [compodoc](https://github.com/compodoc/compodoc):
```Shell
npm run compodoc
npm run compodoc:serve 
```

## Uso
### Instalación
```Shell
npm install my-library --save 
```
### Loading
#### Using SystemJS configuration
```JavaScript
System.config({
    map: {
        'my-library': 'node_modules/my-library/bundles/my-library.umd.js'
    }
});
```
#### Angular-CLI
No need to set up anything, just import it in your code.
#### Rollup or webpack
No need to set up anything, just import it in your code.
#### Plain JavaScript
Include the `umd` bundle in your `index.html`:
```Html
<script src="node_modules/my-library/bundles/my-library.umd.js"></script>
```
and use global `ng.myLibrary` namespace.

### AoT compilation
The library is compatible with _AoT compilation_.

## License
MIT
