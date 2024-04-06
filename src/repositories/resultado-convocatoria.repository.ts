import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ResultadoConvocatoria, ResultadoConvocatoriaRelations} from '../models';

export class ResultadoConvocatoriaRepository extends DefaultCrudRepository<
  ResultadoConvocatoria,
  typeof ResultadoConvocatoria.prototype.id,
  ResultadoConvocatoriaRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ResultadoConvocatoria, dataSource);
  }
}
