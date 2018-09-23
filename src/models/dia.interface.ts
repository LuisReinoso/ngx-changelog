import { IRegisto } from './registro.interface';

export interface IDia {
  fecha: Date;
  logs: IRegisto[];
}
