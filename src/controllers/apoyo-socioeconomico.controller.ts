import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ApoyoSocioeconomico} from '../models';
import {ApoyoSocioeconomicoRepository} from '../repositories';

export class ApoyoSocioeconomicoController {
  constructor(
    @repository(ApoyoSocioeconomicoRepository)
    public apoyoSocioeconomicoRepository : ApoyoSocioeconomicoRepository,
  ) {}

  @post('/apoyo-socioeconomicos')
  @response(200, {
    description: 'ApoyoSocioeconomico model instance',
    content: {'application/json': {schema: getModelSchemaRef(ApoyoSocioeconomico)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApoyoSocioeconomico, {
            title: 'NewApoyoSocioeconomico',
            exclude: ['id'],
          }),
        },
      },
    })
    apoyoSocioeconomico: Omit<ApoyoSocioeconomico, 'id'>,
  ): Promise<ApoyoSocioeconomico> {
    return this.apoyoSocioeconomicoRepository.create(apoyoSocioeconomico);
  }

  @get('/apoyo-socioeconomicos/count')
  @response(200, {
    description: 'ApoyoSocioeconomico model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ApoyoSocioeconomico) where?: Where<ApoyoSocioeconomico>,
  ): Promise<Count> {
    return this.apoyoSocioeconomicoRepository.count(where);
  }

  @get('/apoyo-socioeconomicos')
  @response(200, {
    description: 'Array of ApoyoSocioeconomico model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ApoyoSocioeconomico, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ApoyoSocioeconomico) filter?: Filter<ApoyoSocioeconomico>,
  ): Promise<ApoyoSocioeconomico[]> {
    return this.apoyoSocioeconomicoRepository.find(filter);
  }

  @patch('/apoyo-socioeconomicos')
  @response(200, {
    description: 'ApoyoSocioeconomico PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApoyoSocioeconomico, {partial: true}),
        },
      },
    })
    apoyoSocioeconomico: ApoyoSocioeconomico,
    @param.where(ApoyoSocioeconomico) where?: Where<ApoyoSocioeconomico>,
  ): Promise<Count> {
    return this.apoyoSocioeconomicoRepository.updateAll(apoyoSocioeconomico, where);
  }

  @get('/apoyo-socioeconomicos/{id}')
  @response(200, {
    description: 'ApoyoSocioeconomico model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ApoyoSocioeconomico, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ApoyoSocioeconomico, {exclude: 'where'}) filter?: FilterExcludingWhere<ApoyoSocioeconomico>
  ): Promise<ApoyoSocioeconomico> {
    return this.apoyoSocioeconomicoRepository.findById(id, filter);
  }

  @patch('/apoyo-socioeconomicos/{id}')
  @response(204, {
    description: 'ApoyoSocioeconomico PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ApoyoSocioeconomico, {partial: true}),
        },
      },
    })
    apoyoSocioeconomico: ApoyoSocioeconomico,
  ): Promise<void> {
    await this.apoyoSocioeconomicoRepository.updateById(id, apoyoSocioeconomico);
  }

  @put('/apoyo-socioeconomicos/{id}')
  @response(204, {
    description: 'ApoyoSocioeconomico PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() apoyoSocioeconomico: ApoyoSocioeconomico,
  ): Promise<void> {
    await this.apoyoSocioeconomicoRepository.replaceById(id, apoyoSocioeconomico);
  }

  @del('/apoyo-socioeconomicos/{id}')
  @response(204, {
    description: 'ApoyoSocioeconomico DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.apoyoSocioeconomicoRepository.deleteById(id);
  }
}
