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
import { CrearApoyoSocioeconomicoComponent } from './apoyo-socioeconomico/crear-apoyo-socioeconomico/crear-apoyo-socioeconomico.component';
import { ListarApoyoSocioeconomicoComponent } from './apoyo-socioeconomico/listar-apoyo-socioeconomico/listar-apoyo-socioeconomico.component';
import { EditarApoyoSocioeconomicoComponent } from './apoyo-socioeconomico/editar-apoyo-socioeconomico/editar-apoyo-socioeconomico.component';
import { RemoverApoyoSocioeconomicoComponent } from './apoyo-socioeconomico/remover-apoyo-socioeconomico/remover-apoyo-socioeconomico.component';
import { CrearContactoComponent } from './contacto/crear-contacto/crear-contacto.component';
import { ListarContactoComponent } from './contacto/listar-contacto/listar-contacto.component';
import { EditarContactoComponent } from './contacto/editar-contacto/editar-contacto.component';
import { RemoverContactoComponent } from './contacto/remover-contacto/remover-contacto.component';
import { CrearMunicipioComponent } from './municipio/crear-municipio/crear-municipio.component';
import { EditarMunicipioComponent } from './municipio/editar-municipio/editar-municipio.component';
import { ListarMunicipioComponent } from './municipio/listar-municipio/listar-municipio.component';
import { RemoverMunicipioComponent } from './municipio/remover-municipio/remover-municipio.component';
import { CrearOrganizacionComponent } from './organizacion/crear-organizacion/crear-organizacion.component';
import { EditarOrganizacionComponent } from './organizacion/editar-organizacion/editar-organizacion.component';
import { ListarOrganizacionComponent } from './organizacion/listar-organizacion/listar-organizacion.component';
import { RemoverOrganizacionComponent } from './organizacion/remover-organizacion/remover-organizacion.component';
import { CrearProcesoConvocatoriaComponent } from './proceso-convocatoria/crear-proceso-convocatoria/crear-proceso-convocatoria.component';
import { EditarProcesoConvocatoriaComponent } from './proceso-convocatoria/editar-proceso-convocatoria/editar-proceso-convocatoria.component';
import { ListarProcesoConvocatoriaComponent } from './proceso-convocatoria/listar-proceso-convocatoria/listar-proceso-convocatoria.component';
import { RemoverProcesoConvocatoriaComponent } from './proceso-convocatoria/remover-proceso-convocatoria/remover-proceso-convocatoria.component';
import { CrearProgramaComponent } from './programa/crear-programa/crear-programa.component';
import { EditarProgramaComponent } from './programa/editar-programa/editar-programa.component';
import { ListarProgramaComponent } from './programa/listar-programa/listar-programa.component';
import { RemoverProgramaComponent } from './programa/remover-programa/remover-programa.component';
import { RemoverApoyoComponent } from './apoyos/remover-apoyo/remover-apoyo.component';

const routes: Routes = [
  { //estudiantes
    path: 'crear',
    component: CrearComponent
  },
  {
    path: 'editar/:id',
    component: EditarComponent
  },
  {
    path: 'listar',
    component: ListarComponent
  },
  {
    path: 'remover/:id',
    component: RemoverComponent
  },
  {
    path: 'crear-apoyo',
    component:CrearApoyoComponent
  },
  {
    path: 'editar-apoyo/:id',
    component:EditarApoyoComponent
  },
  {
    path: 'listar-apoyo',
    component:ListarApoyoComponent
  },
  {
    path: 'remover-apoyo/:id',
    component:RemoverApoyoComponent
  },
  {
    path: 'crear-convacatoria',
    component: CrearConvacatoriaComponent
  },
  {
    path: 'editar-convacatoria/:id',
    component:EditarConvacatoriaComponent
  },
  {
    path: 'listar-convacatoria',
    component:ListarConvacatoriaComponent
  },
  {
    path: 'remover-convacatoria/:id',
    component:RemoverConvacatoriaComponent
  },
  
  {
    path: 'crear-facultad',
    component: CrearFacultadComponent
  },
  {
    path: 'editar-facultad/:id',
    component:EditarFacultadComponent
  },
  {
    path: 'listar-facultad',
    component:ListarFacultadComponent
  },
  {
    path: 'remover-facultad/:id',
    component:RemoverFacultadComponent
  },

  {
    path: 'crear-apoyo-socioeconomico',
    component: CrearApoyoSocioeconomicoComponent
  },
  {
    path: 'editar-apoyo-socioeconomico/:id',
    component: EditarApoyoSocioeconomicoComponent
  },
  {
    path: 'listar-apoyo-socioeconomico',
    component: ListarApoyoSocioeconomicoComponent
  },
  {
    path: 'remover-apoyo-socioeconomico/:id',
    component: RemoverApoyoSocioeconomicoComponent
  },

  {
    path: 'crear-contacto',
    component: CrearContactoComponent
  },
  {
    path: 'editar-contacto/:id',
    component: EditarContactoComponent
  },
  {
    path: 'listar-contacto',
    component: ListarContactoComponent
  },
  {
    path: 'remover-contacto/:id',
    component: RemoverContactoComponent
  },

  {
    path: 'crear-municipio',
    component: CrearMunicipioComponent
  },
  {
    path: 'editar-municipio/:id',
    component: EditarMunicipioComponent
  },
  {
    path: 'listar-municipio',
    component: ListarMunicipioComponent
  },
  {
    path: 'remover-municipio/:id',
    component: RemoverMunicipioComponent
  },

  {
    path: 'crear-organizacion',
    component: CrearOrganizacionComponent
  },
  {
    path: 'editar-organizacion/:id',
    component: EditarOrganizacionComponent
  },
  {
    path: 'listar-organizacion',
    component: ListarOrganizacionComponent
  },
  {
    path: 'remover-organizacion/:id',
    component: RemoverOrganizacionComponent
  },

  {
    path: 'crear-proceso-convocatoria',
    component: CrearProcesoConvocatoriaComponent
  },
  {
    path: 'editar-proceso-convocatoria/:id',
    component: EditarProcesoConvocatoriaComponent
  },
  {
    path: 'listar-proceso-convocatoria',
    component: ListarProcesoConvocatoriaComponent
  },
  {
    path: 'remover-proceso-convocatoria/:id',
    component: RemoverProcesoConvocatoriaComponent
  },

  {
    path: 'crear-programa',
    component: CrearProgramaComponent
  },
  {
    path: 'editar-programa/:id',
    component: EditarProgramaComponent
  },
  {
    path: 'listar-programa',
    component: ListarProgramaComponent
  },
  {
    path: 'remover-programa/:id',
    component: RemoverProgramaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametrosRoutingModule { }
