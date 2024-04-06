import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ApoyoSocioeconomico, ApoyoSocioeconomicoRelations} from '../models';

export class ApoyoSocioeconomicoRepository extends DefaultCrudRepository<
  ApoyoSocioeconomico,
  typeof ApoyoSocioeconomico.prototype.id,
  ApoyoSocioeconomicoRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ApoyoSocioeconomico, dataSource);
  }
}
