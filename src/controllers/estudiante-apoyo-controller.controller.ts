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
import {EstudianteApoyo} from '../models';
import {EstudianteApoyoRepository} from '../repositories';

export class EstudianteApoyoControllerController {
  constructor(
    @repository(EstudianteApoyoRepository)
    public estudianteApoyoRepository : EstudianteApoyoRepository,
  ) {}

  @post('/estudiante-apoyos')
  @response(200, {
    description: 'EstudianteApoyo model instance',
    content: {'application/json': {schema: getModelSchemaRef(EstudianteApoyo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstudianteApoyo, {
            title: 'NewEstudianteApoyo',
            exclude: ['id'],
          }),
        },
      },
    })
    estudianteApoyo: Omit<EstudianteApoyo, 'id'>,
  ): Promise<EstudianteApoyo> {
    return this.estudianteApoyoRepository.create(estudianteApoyo);
  }

  @get('/estudiante-apoyos/count')
  @response(200, {
    description: 'EstudianteApoyo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EstudianteApoyo) where?: Where<EstudianteApoyo>,
  ): Promise<Count> {
    return this.estudianteApoyoRepository.count(where);
  }

  @get('/estudiante-apoyos')
  @response(200, {
    description: 'Array of EstudianteApoyo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EstudianteApoyo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EstudianteApoyo) filter?: Filter<EstudianteApoyo>,
  ): Promise<EstudianteApoyo[]> {
    return this.estudianteApoyoRepository.find(filter);
  }

  @patch('/estudiante-apoyos')
  @response(200, {
    description: 'EstudianteApoyo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstudianteApoyo, {partial: true}),
        },
      },
    })
    estudianteApoyo: EstudianteApoyo,
    @param.where(EstudianteApoyo) where?: Where<EstudianteApoyo>,
  ): Promise<Count> {
    return this.estudianteApoyoRepository.updateAll(estudianteApoyo, where);
  }

  @get('/estudiante-apoyos/{id}')
  @response(200, {
    description: 'EstudianteApoyo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EstudianteApoyo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EstudianteApoyo, {exclude: 'where'}) filter?: FilterExcludingWhere<EstudianteApoyo>
  ): Promise<EstudianteApoyo> {
    return this.estudianteApoyoRepository.findById(id, filter);
  }

  @patch('/estudiante-apoyos/{id}')
  @response(204, {
    description: 'EstudianteApoyo PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EstudianteApoyo, {partial: true}),
        },
      },
    })
    estudianteApoyo: EstudianteApoyo,
  ): Promise<void> {
    await this.estudianteApoyoRepository.updateById(id, estudianteApoyo);
  }

  @put('/estudiante-apoyos/{id}')
  @response(204, {
    description: 'EstudianteApoyo PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estudianteApoyo: EstudianteApoyo,
  ): Promise<void> {
    await this.estudianteApoyoRepository.replaceById(id, estudianteApoyo);
  }

  @del('/estudiante-apoyos/{id}')
  @response(204, {
    description: 'EstudianteApoyo DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estudianteApoyoRepository.deleteById(id);
  }
}
