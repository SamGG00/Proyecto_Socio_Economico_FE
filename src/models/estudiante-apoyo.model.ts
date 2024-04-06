import {Entity, belongsTo, model, property} from '@loopback/repository';
import {ApoyoSocioeconomico} from './apoyo-socioeconomico.model';
import {Estudiante} from './estudiante.model';

@model()
export class EstudianteApoyo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @belongsTo(() => Estudiante)
  estudianteId: number;


  @belongsTo(() => ApoyoSocioeconomico)
  apoyoid: number;


  @property({
    type: 'boolean',
    required: true,
  })
  actual: boolean;

  @property({
    type: 'number',
  })
  apoyoSocioeconomicoId?: number;

  constructor(data?: Partial<EstudianteApoyo>) {
    super(data);
  }
}

export interface EstudianteApoyoRelations {
  // describe navigational properties here
}

export type EstudianteApoyoWithRelations = EstudianteApoyo & EstudianteApoyoRelations;
