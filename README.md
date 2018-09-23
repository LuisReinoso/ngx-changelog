# ngx-changelog

[![Build Status](https://travis-ci.org/LuisReinoso/ngx-changelog.svg?branch=master)](https://travis-ci.org/LuisReinoso/ngx-changelog)

> Muestra el changelog de la aplicación mediante un timeline; Show the changelog of the application using a timeline.

## Instalación

```Shell
npm install ngx-changelog --save
```

Importar el módulo

```javascript
import { ChangelogModule } from 'ngx-changelog';

@NgModule({
  imports: [
    ..
    ChangelogModule,
    ..
  ]
})
```

En example.component.html

```html
<cmp-changelog [changelog]="changelog"></cmp-changelog>
```

En example.component.ts

```typescript
import { IChangelog, Colores, TipoLog } from 'ngx-changelog';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent {
  changelog: IChangelog[];
  constructor() {
    this.changelog = [
      {
        version: 'v2.0.0',
        dias: [
          {
            fecha: new Date('2018/09/22'),
            logs: [
              {
                tipo: TipoLog.agregado,
                color: Colores.success,
                contenido: 'Agregado cambios en pedido cotizacion'
              },
              {
                tipo: TipoLog.eliminado,
                color: Colores.danger,
                contenido: 'Eliminado pedido cotizacion'
              }
            ]
          },
          {
            fecha: new Date('2018/09/23'),
            logs: [
              {
                tipo: TipoLog.agregado,
                color: Colores.success,
                contenido: 'Agregado cambios en pedido cotizacion'
              },
              {
                tipo: TipoLog.eliminado,
                color: Colores.danger,
                contenido: 'Eliminado pedido cotizacion'
              }
            ]
          }
        ]
      },
      {
        version: 'v1.0.0',
        dias: [
          {
            fecha: new Date('2018/09/22'),
            logs: [
              {
                tipo: TipoLog.agregado,
                color: Colores.success,
                contenido: 'Agregado cambios en pedido cotizacion'
              },
              {
                tipo: TipoLog.eliminado,
                color: Colores.danger,
                contenido: 'Eliminado pedido cotizacion'
              }
            ]
          },
          {
            fecha: new Date('2018/09/23'),
            logs: [
              {
                tipo: TipoLog.modificado,
                color: Colores.info,
                contenido: 'Agregado cambios en pedido cotizacion'
              },
              {
                tipo: TipoLog.pruebas,
                color: Colores.warning,
                contenido: 'Eliminado pedido cotizacion'
              }
            ]
          }
        ]
      }
    ];
  }
}
```

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

### AoT compilation

The library is compatible with _AoT compilation_.

## License

MIT
