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
import {Convocatoria} from '../models';
import {ConvocatoriaRepository} from '../repositories';

export class ConvocatoriaController {
  constructor(
    @repository(ConvocatoriaRepository)
    public convocatoriaRepository : ConvocatoriaRepository,
  ) {}

  @post('/convocatorias')
  @response(200, {
    description: 'Convocatoria model instance',
    content: {'application/json': {schema: getModelSchemaRef(Convocatoria)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Convocatoria, {
            title: 'NewConvocatoria',
            exclude: ['id'],
          }),
        },
      },
    })
    convocatoria: Omit<Convocatoria, 'id'>,
  ): Promise<Convocatoria> {
    return this.convocatoriaRepository.create(convocatoria);
  }

  @get('/convocatorias/count')
  @response(200, {
    description: 'Convocatoria model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Convocatoria) where?: Where<Convocatoria>,
  ): Promise<Count> {
    return this.convocatoriaRepository.count(where);
  }

  @get('/convocatorias')
  @response(200, {
    description: 'Array of Convocatoria model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Convocatoria, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Convocatoria) filter?: Filter<Convocatoria>,
  ): Promise<Convocatoria[]> {
    return this.convocatoriaRepository.find(filter);
  }

  @patch('/convocatorias')
  @response(200, {
    description: 'Convocatoria PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Convocatoria, {partial: true}),
        },
      },
    })
    convocatoria: Convocatoria,
    @param.where(Convocatoria) where?: Where<Convocatoria>,
  ): Promise<Count> {
    return this.convocatoriaRepository.updateAll(convocatoria, where);
  }

  @get('/convocatorias/{id}')
  @response(200, {
    description: 'Convocatoria model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Convocatoria, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Convocatoria, {exclude: 'where'}) filter?: FilterExcludingWhere<Convocatoria>
  ): Promise<Convocatoria> {
    return this.convocatoriaRepository.findById(id, filter);
  }

  @patch('/convocatorias/{id}')
  @response(204, {
    description: 'Convocatoria PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Convocatoria, {partial: true}),
        },
      },
    })
    convocatoria: Convocatoria,
  ): Promise<void> {
    await this.convocatoriaRepository.updateById(id, convocatoria);
  }

  @put('/convocatorias/{id}')
  @response(204, {
    description: 'Convocatoria PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() convocatoria: Convocatoria,
  ): Promise<void> {
    await this.convocatoriaRepository.replaceById(id, convocatoria);
  }

  @del('/convocatorias/{id}')
  @response(204, {
    description: 'Convocatoria DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.convocatoriaRepository.deleteById(id);
  }
}
