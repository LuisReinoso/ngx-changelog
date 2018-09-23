/**
 * Angular library starter.
 * Build an Angular library compatible with AoT compilation & Tree shaking
 * Copyright Roberto Simonetti.
 * MIT license.
 * https://github.com/robisim74/angular-library-starter
 */

/**
 * Entry point for all public APIs of the package.
 */
export { ChangelogComponent } from './src/components/changelog.component';
export { ChangelogModule } from './src/modules/changelog.module';
export { Colores } from './src/models/colores.enum';
export { IChangelog } from './src/models/changelog.interface';
export { IDia } from './src/models/dia.interface';
export { IRegisto } from './src/models/registro.interface';
export { TipoLog } from './src/models/tipo-log.enum';

// This file only reexports content of the `src` folder. Keep it that way.
