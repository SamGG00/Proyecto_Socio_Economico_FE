import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {EstudianteApoyo, EstudianteApoyoRelations} from '../models';

export class EstudianteApoyoRepository extends DefaultCrudRepository<
  EstudianteApoyo,
  typeof EstudianteApoyo.prototype.id,
  EstudianteApoyoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(EstudianteApoyo, dataSource);
  }
}
