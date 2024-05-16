import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametrosRoutingModule } from './parametros-routing.module';
import { CrearComponent } from './estudiante/crear/crear.component';
import { EditarComponent } from './estudiante/editar/editar.component';
import { ListarComponent } from './estudiante/listar/listar.component';
import { RemoverComponent } from './estudiante/remover/remover.component';
import { CrearApoyoComponent } from './apoyos/crear-apoyo/crear-apoyo.component';
import { EditarApoyoComponent } from './apoyos/editar-apoyo/editar-apoyo.component';
import { ListarApoyoComponent } from './apoyos/listar-apoyo/listar-apoyo.component';
import { RemoverApoyoComponent } from './apoyos/remover-apoyo/remover-apoyo.component';
import { CrearConvacatoriaComponent } from './convacatorias/crear-convacatoria/crear-convacatoria.component';
import { EditarConvacatoriaComponent } from './convacatorias/editar-convacatoria/editar-convacatoria.component';
import { ListarConvacatoriaComponent } from './convacatorias/listar-convacatoria/listar-convacatoria.component';
import { RemoverConvacatoriaComponent } from './convacatorias/remover-convacatoria/remover-convacatoria.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearComponent,
    EditarComponent,
    ListarComponent,
    RemoverComponent,
    CrearApoyoComponent,
    EditarApoyoComponent,
    ListarApoyoComponent,
    RemoverApoyoComponent,
    CrearConvacatoriaComponent,
    EditarConvacatoriaComponent,
    ListarConvacatoriaComponent,
    RemoverConvacatoriaComponent,
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParametrosModule { }
