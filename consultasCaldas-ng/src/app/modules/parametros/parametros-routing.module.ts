import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './estudiante/crear/crear.component';
import { EditarComponent } from './estudiante/editar/editar.component';
import { ListarComponent } from './estudiante/listar/listar.component';
import { RemoverComponent } from './estudiante/remover/remover.component';
import { CrearApoyoComponent } from './apoyos/crear-apoyo/crear-apoyo.component';
import { ListarApoyoComponent } from './apoyos/listar-apoyo/listar-apoyo.component';
import { EditarApoyoComponent } from './apoyos/editar-apoyo/editar-apoyo.component';
import { CrearConvacatoriaComponent } from './convacatorias/crear-convacatoria/crear-convacatoria.component';
import { EditarConvacatoriaComponent } from './convacatorias/editar-convacatoria/editar-convacatoria.component';
import { ListarConvacatoriaComponent } from './convacatorias/listar-convacatoria/listar-convacatoria.component';
import { RemoverConvacatoriaComponent } from './convacatorias/remover-convacatoria/remover-convacatoria.component';
import { CrearFacultadComponent } from './facultad/crear-facultad/crear-facultad.component';
import { EditarFacultadComponent } from './facultad/editar-facultad/editar-facultad.component';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';
import { RemoverFacultadComponent } from './facultad/remover-facultad/remover-facultad.component';

const routes: Routes = [
  {
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'editar',
    component: EditarComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'remover',
    component: RemoverComponent
  },
  {
    path: 'crear-apoyo',
    component:CrearApoyoComponent
  },
  {
    path: 'editar-apoyo',
    component:EditarApoyoComponent
  },
  {
    path: 'listar-apoyo',
    component:ListarApoyoComponent
  },
  {
    path: 'remover-apoyo',
    component:RemoverComponent
  },
  {
    path: 'crear-convacatoria',
    component: CrearConvacatoriaComponent
  },
  {
    path: 'editar-convacatoria',
    component:EditarConvacatoriaComponent
  },
  {
    path: 'listar-convacatoria',
    component:ListarConvacatoriaComponent
  },
  {
    path: 'remover-convacatoria',
    component:RemoverConvacatoriaComponent
  },
  
  {
    path: 'crear-facultad',
    component: CrearFacultadComponent
  },
  {
    path: 'editar-facultad',
    component:EditarFacultadComponent
  },
  {
    path: 'listar-facultad',
    component:ListarFacultadComponent
  },
  {
    path: 'remover-facultad',
    component:RemoverFacultadComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
