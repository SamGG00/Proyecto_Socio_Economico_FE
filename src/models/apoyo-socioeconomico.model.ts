import {Entity, model, property} from '@loopback/repository';

@model()
export class ApoyoSocioeconomico extends Entity {
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
  tipoapoyo: string;

  @property({
    type: 'number',
    required: true,
  })
  semestre: number;

  @property({
    type: 'number',
    required: true,
  })
  cantidadEstudiantesTotalAdmitidos: number;

  @property({
    type: 'string',
    required: true,
  })
  lugarApoyo: string;


  constructor(data?: Partial<ApoyoSocioeconomico>) {
    super(data);
  }
}

export interface ApoyoSocioeconomicoRelations {
  // describe navigational properties here
}

export type ApoyosocioeconomicoWithRelations = ApoyoSocioeconomico & ApoyoSocioeconomicoRelations;
