import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CrearApoyoSocioeconomicoComponent } from './apoyo-socioeconomico/crear-apoyo-socioeconomico/crear-apoyo-socioeconomico.component';
import { EditarApoyoSocioeconomicoComponent } from './apoyo-socioeconomico/editar-apoyo-socioeconomico/editar-apoyo-socioeconomico.component';
import { ListarApoyoSocioeconomicoComponent } from './apoyo-socioeconomico/listar-apoyo-socioeconomico/listar-apoyo-socioeconomico.component';
import { RemoverApoyoSocioeconomicoComponent } from './apoyo-socioeconomico/remover-apoyo-socioeconomico/remover-apoyo-socioeconomico.component';
import { CrearContactoComponent } from './contacto/crear-contacto/crear-contacto.component';
import { ListarContactoComponent } from './contacto/listar-contacto/listar-contacto.component';
import { EditarContactoComponent } from './contacto/editar-contacto/editar-contacto.component';
import { RemoverContactoComponent } from './contacto/remover-contacto/remover-contacto.component';
import { CrearMunicipioComponent } from './municipio/crear-municipio/crear-municipio.component';
import { ListarMunicipioComponent } from './municipio/listar-municipio/listar-municipio.component';
import { EditarMunicipioComponent } from './municipio/editar-municipio/editar-municipio.component';
import { RemoverMunicipioComponent } from './municipio/remover-municipio/remover-municipio.component';
import { CrearOrganizacionComponent } from './organizacion/crear-organizacion/crear-organizacion.component';
import { ListarOrganizacionComponent } from './organizacion/listar-organizacion/listar-organizacion.component';
import { EditarOrganizacionComponent } from './organizacion/editar-organizacion/editar-organizacion.component';
import { RemoverOrganizacionComponent } from './organizacion/remover-organizacion/remover-organizacion.component';
import { CrearProcesoConvocatoriaComponent } from './proceso-convocatoria/crear-proceso-convocatoria/crear-proceso-convocatoria.component';
import { EditarProcesoConvocatoriaComponent } from './proceso-convocatoria/editar-proceso-convocatoria/editar-proceso-convocatoria.component';
import { ListarProcesoConvocatoriaComponent } from './proceso-convocatoria/listar-proceso-convocatoria/listar-proceso-convocatoria.component';
import { RemoverProcesoConvocatoriaComponent } from './proceso-convocatoria/remover-proceso-convocatoria/remover-proceso-convocatoria.component';
import { CrearProgramaComponent } from './programa/crear-programa/crear-programa.component';
import { EditarProgramaComponent } from './programa/editar-programa/editar-programa.component';
import { ListarProgramaComponent } from './programa/listar-programa/listar-programa.component';
import { RemoverProgramaComponent } from './programa/remover-programa/remover-programa.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListarFacultadComponent } from './facultad/listar-facultad/listar-facultad.component';
import { CrearFacultadComponent } from './facultad/crear-facultad/crear-facultad.component';
import { EditarFacultadComponent } from './facultad/editar-facultad/editar-facultad.component';
import { RemoverFacultadComponent } from './facultad/remover-facultad/remover-facultad.component';
import { ListarPrincipalComponent } from './principal/listar-principal/listar-principal.component';
import { CrearPrincipalComponent } from './principal/crear-principal/crear-principal.component';
import { EditarPrincipalComponent } from './principal/editar-principal/editar-principal.component';
import { RemoverPrincipalComponent } from './principal/remover-principal/remover-principal.component';
import { ChartModule, LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService } from '@syncfusion/ej2-angular-charts';


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
    CrearApoyoSocioeconomicoComponent,
    EditarApoyoSocioeconomicoComponent,
    ListarApoyoSocioeconomicoComponent,
    RemoverApoyoSocioeconomicoComponent,
    CrearFacultadComponent,
    ListarFacultadComponent,
    EditarFacultadComponent,
    RemoverFacultadComponent,
    CrearContactoComponent,
    ListarContactoComponent,
    EditarContactoComponent,
    RemoverContactoComponent,
    CrearMunicipioComponent,
    ListarMunicipioComponent,
    EditarMunicipioComponent,
    RemoverMunicipioComponent,
    CrearOrganizacionComponent,
    ListarOrganizacionComponent,
    EditarOrganizacionComponent,
    RemoverOrganizacionComponent,
    CrearProcesoConvocatoriaComponent,
    EditarProcesoConvocatoriaComponent,
    ListarProcesoConvocatoriaComponent,
    RemoverProcesoConvocatoriaComponent,
    CrearProgramaComponent,
    EditarProgramaComponent,
    ListarProgramaComponent,
    RemoverProgramaComponent,
    ListarPrincipalComponent,
    CrearPrincipalComponent,
    EditarPrincipalComponent,
    RemoverPrincipalComponent,
  ],
  imports: [
    CommonModule,
    ParametrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    ChartModule
  ]
})
export class ParametrosModule { }
