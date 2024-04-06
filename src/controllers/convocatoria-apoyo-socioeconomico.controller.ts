import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
Convocatoria,
ResultadoConvocatoria,
ApoyoSocioeconomico,
} from '../models';
import {ConvocatoriaRepository} from '../repositories';

export class ConvocatoriaApoyoSocioeconomicoController {
  constructor(
    @repository(ConvocatoriaRepository) protected convocatoriaRepository: ConvocatoriaRepository,
  ) { }

  @get('/convocatorias/{id}/apoyo-socioeconomicos', {
    responses: {
      '200': {
        description: 'Array of Convocatoria has many ApoyoSocioeconomico through ResultadoConvocatoria',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(ApoyoSocioeconomico)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ApoyoSocioeconomico>,
  ): Promise<ApoyoSocioeconomico[]> {
    return this.convocatoriaRepository.apoyoSocioeconomicos(id).find(filter);
  }

  @post('/convocatorias/{id}/apoyo-socioeconomicos', {
    responses: {
      '200': {
        description: 'create a ApoyoSocioeconomico model instance',
        content: {'application/json': {schema: getModelSchemaRef(ApoyoSocioeconomico)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Convocatoria.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApoyoSocioeconomico, {
            title: 'NewApoyoSocioeconomicoInConvocatoria',
            exclude: ['id'],
          }),
        },
      },
    }) apoyoSocioeconomico: Omit<ApoyoSocioeconomico, 'id'>,
  ): Promise<ApoyoSocioeconomico> {
    return this.convocatoriaRepository.apoyoSocioeconomicos(id).create(apoyoSocioeconomico);
  }

  @patch('/convocatorias/{id}/apoyo-socioeconomicos', {
    responses: {
      '200': {
        description: 'Convocatoria.ApoyoSocioeconomico PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApoyoSocioeconomico, {partial: true}),
        },
      },
    })
    apoyoSocioeconomico: Partial<ApoyoSocioeconomico>,
    @param.query.object('where', getWhereSchemaFor(ApoyoSocioeconomico)) where?: Where<ApoyoSocioeconomico>,
  ): Promise<Count> {
    return this.convocatoriaRepository.apoyoSocioeconomicos(id).patch(apoyoSocioeconomico, where);
  }

  @del('/convocatorias/{id}/apoyo-socioeconomicos', {
    responses: {
      '200': {
        description: 'Convocatoria.ApoyoSocioeconomico DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ApoyoSocioeconomico)) where?: Where<ApoyoSocioeconomico>,
  ): Promise<Count> {
    return this.convocatoriaRepository.apoyoSocioeconomicos(id).delete(where);
  }
}
