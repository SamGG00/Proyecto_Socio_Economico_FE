import {Entity, model, property} from '@loopback/repository';

@model()
export class ResultadoConvocatoria extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  convocatoriaid: number;

  @property({
    type: 'number',
    required: true,
  })
  estudianteid: number;

  @property({
    type: 'boolean',
    required: true,
  })
  aprobado: boolean;

  @property({
    type: 'number',
    required: true,
  })
  semestre: number;

  @property({
    type: 'number',
  })
  convocatoriaId?: number;

  @property({
    type: 'number',
  })
  apoyoSocioeconomicoId?: number;

  constructor(data?: Partial<ResultadoConvocatoria>) {
    super(data);
  }
}

export interface ResultadoConvocatoriaRelations {
  // describe navigational properties here
}

export type ResultadoConvocatoriaWithRelations = ResultadoConvocatoria & ResultadoConvocatoriaRelations;
