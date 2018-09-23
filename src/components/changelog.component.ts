import { Component, Input } from '@angular/core';
import { Colores } from '../models/colores.enum';
import { TipoLog } from '../models/tipo-log.enum';
import { IChangelog } from '../models/changelog.interface';

@Component({
  selector: 'cmp-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent {
  @Input()
  changelog: IChangelog[];

  constructor() {
    this.changelog = [
    //   {
    //     version: 'v2.0.0',
    //     dias: [
    //       {
    //         fecha: new Date('2018/09/22'),
    //         logs: [
    //           {
    //             etiqueta: 'Agregado',
    //             color: Colores.success,
    //             contenido: 'Agregado cambios en pedido cotizacion'
    //           },
    //           {
    //             etiqueta: 'Eliminado',
    //             color: Colores.danger,
    //             contenido: 'Eliminado pedido cotizacion'
    //           }
    //         ]
    //       },
    //       {
    //         fecha: new Date('2018/09/23'),
    //         logs: [
    //           {
    //             etiqueta: 'Agregado',
    //             color: Colores.success,
    //             contenido: 'Agregado cambios en pedido cotizacion'
    //           },
    //           {
    //             etiqueta: 'Eliminado',
    //             color: Colores.danger,
    //             contenido: 'Eliminado pedido cotizacion'
    //           }
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     version: 'v1.0.0',
    //     dias: [
    //       {
    //         fecha: new Date('2018/09/22'),
    //         logs: [
    //           {
    //             etiqueta: TipoLog.agregado,
    //             color: Colores.success,
    //             contenido: 'Agregado cambios en pedido cotizacion'
    //           },
    //           {
    //             etiqueta: TipoLog.eliminado,
    //             color: Colores.danger,
    //             contenido: 'Eliminado pedido cotizacion'
    //           }
    //         ]
    //       },
    //       {
    //         fecha: new Date('2018/09/23'),
    //         logs: [
    //           {
    //             etiqueta: TipoLog.modificado,
    //             color: Colores.info,
    //             contenido: 'Agregado cambios en pedido cotizacion'
    //           },
    //           {
    //             etiqueta: TipoLog.pruebas,
    //             color: Colores.warning,
    //             contenido: 'Eliminado pedido cotizacion'
    //           }
    //         ]
    //       }
    //     ]
    //   }
    ];
  }
}
