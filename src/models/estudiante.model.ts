import {Entity, model, property, hasMany} from '@loopback/repository';
import {ApoyoSocioeconomico} from './apoyo-socioeconomico.model';
import {EstudianteApoyo} from './estudiante-apoyo.model';

@model()
export class Estudiante extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  codigo: string;

  @property({
    type: 'string',
    required: true,
  })
  carrera: string;

  @property({
    type: 'number',
    required: true,
  })
  pbm: number;

  @property({
    type: 'number',
    required: true,
  })
  promedionotas: number;

  @property({
    type: 'number',
    required: true,
  })
  puntajeapoyos: number;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'number',
    required: true,
  })
  ultimosemetre: number;

  @hasMany(() => ApoyoSocioeconomico, {through: {model: () => EstudianteApoyo}})
  apoyoSocioeconomicos: ApoyoSocioeconomico[];

  constructor(data?: Partial<Estudiante>) {
    super(data);
  }
}

export interface EstudianteRelations {
  // describe navigational properties here
}

export type EstudianteWithRelations = Estudiante & EstudianteRelations;
