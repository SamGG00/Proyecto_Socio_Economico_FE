import {Entity, model, property, hasMany} from '@loopback/repository';
import {ApoyoSocioeconomico} from './apoyo-socioeconomico.model';
import {ResultadoConvocatoria} from './resultado-convocatoria.model';

@model()
export class Convocatoria extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  tipoApoyo: string;

  @property({
    type: 'number',
    required: true,
  })
  semestre: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidadEstudiantesPresentados: number;

  @hasMany(() => ApoyoSocioeconomico, {through: {model: () => ResultadoConvocatoria}})
  apoyoSocioeconomicos: ApoyoSocioeconomico[];

  constructor(data?: Partial<Convocatoria>) {
    super(data);
  }
}

export interface ConvocatoriaRelations {
  // describe navigational properties here
}

export type ConvocatoriaWithRelations = Convocatoria & ConvocatoriaRelations;
