import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { EstudianteService } from './estudiante.service';
import { MunicipioService } from './municipio.service';
import { ProgramaService } from './programa.service';
import { ProcesoConvocatoriaService } from './proceso-convocatoria.service';
import { ApoyoSocioeconomicoService } from './apoyo-socioeconomico.service';
import { ContactoService } from './contacto.service';
import { ConvacatoriasService } from './convacatorias.service';
import { ApoyosService } from './apoyos.service';
import { FacultadService } from './facultad.service';
import { OrganizacionService } from './organizacion.service';

@Injectable({
  providedIn: 'root'
})
export class PrincipalService {

  constructor(
    private estudianteService: EstudianteService,
    private municipioService: MunicipioService,
    private programaService: ProgramaService,
    private procesoConvocatoriaService: ProcesoConvocatoriaService,
    private convocatoriaService: ConvacatoriasService,
    private apoyoSocioeconomicoService: ApoyoSocioeconomicoService,
    private apoyoService: ApoyosService,
    private contactoService: ContactoService,
    private facultadService: FacultadService,
    private organizacionService: OrganizacionService,
  ) { }

  GetPrincipalData(): Observable<any[]> {
    return forkJoin({
      estudiantes: this.estudianteService.GetRecordList(),
      municipios: this.municipioService.GetRecordList(),
      programas: this.programaService.GetRecordList(),
      procesoConvocatorias: this.procesoConvocatoriaService.GetRecordList(),
      convocatorias: this.convocatoriaService.GetRecordList(),
      apoyoSocioeconomicos: this.apoyoSocioeconomicoService.GetRecordList(),
      apoyos: this.apoyoService.GetRecordList(),
      contactos: this.contactoService.GetRecordList()
    }).pipe(
      map(response => {
        const { estudiantes, municipios, programas, procesoConvocatorias, convocatorias, apoyoSocioeconomicos, apoyos, contactos } = response;

        return estudiantes.map(estudiante => {
          const municipioNacimiento = municipios.find(m => m.id === estudiante.Id_Municipio_Nacimiento);
          const municipioVivienda = municipios.find(m => m.id === estudiante.Id_Municipio_Vivienda);
          const programa = programas.find(p => p.id === estudiante.Id_Programa_Academico);
          const contacto = contactos.find(c => c.id === estudiante.Id_Contacto);
          const procesoConvocatoria = procesoConvocatorias.find(pc => pc.id === estudiante.Codigo_Estudiante);
          const convocatoria = convocatorias.find(c => c.id === procesoConvocatoria?.Id_Convocatoria);
          const apoyoSocioeconomico = apoyoSocioeconomicos.find(aps => aps.id === convocatoria?.Id_Apoyo_Socio_Economico);
          const apoyo = apoyos.find(a => a.id === apoyoSocioeconomico?.Id_Apoyo);

          return {
            nombrecompleto: estudiante.Nombre,
            sexo: estudiante.Genero,
            Edad: estudiante.Edad,
            municipioprocedencia: municipioNacimiento?.Nombre,
            Tipo_Identificacion: estudiante.Tipo_Identificacion,
            Numero_De_Identificacion: estudiante.Numero_De_Identificacion,
            Codigo_Estudiante: estudiante.Codigo_Estudiante,
            Correo_Electronico_Estudiante: estudiante.Correo,
            Numero_Contacto_Estudiante: estudiante.Celular,
            PBM: estudiante.PBM,
            Programa_Actual: programa?.Nombre,
            Promedio_Notas: estudiante.Promedio_Notas,
            Duracion_programa: programa?.Duracion_Semestres,
            retirosbajorendimiento: estudiante.Retiros_Bajo_Rendimiento ? 'SI' : 'NO',
            periodoretiro: estudiante.Semestre_Bajo_Rendimiento,
            sancionesdisciplinarias: estudiante.Sanciones_Disciplinarias ? 'SI' : 'NO',
            semestresancion: estudiante.Semestre_Sancion,
            Codigo_SNIES: programa?.Codigo_SNIES,
            beneficiosies: apoyo?.Nombre,
            semestre: apoyoSocioeconomico?.Semestre,
            Ultimo_Semestre_Cursado: estudiante.Ultimo_Semestre_Cursado,
            municipioResidencia: municipioVivienda?.Nombre,
            aspiranteespecial: estudiante.Aspirante_Especial ? 'SI' : 'NO',
            Estado: estudiante.Estado,
            personasacargo: estudiante.Hijos ? 'SI' : 'NO',
            Estrato: estudiante.Estrato,
            contactonombre: contacto?.Nombre,
            contactoparentesco: contacto?.Parentesco,
            contactonumero: contacto?.Celular,
            contactoprocedencia: contacto?.Procedencia,
            contactocorreo: contacto?.Correo
          };
        });
      })
    );
  }

  GetProgramasWithFacultadNames(): Observable<any[]> {
    return forkJoin({
      programas: this.programaService.GetRecordList(),
      facultades: this.facultadService.GetRecordList()
    }).pipe(
      map(response => {
        const { programas, facultades } = response;

        return programas.map(programa => {
          const facultad = facultades.find(f => f.id === programa.Id_Facultad);
          return {
            ...programa,
            Nombre_Facultad: facultad ? facultad.Nombre : 'N/A'
          };
        });
      })
    );
  }

  GetApoyosWithOrganizacionNames(): Observable<any[]> {
    return forkJoin({
      apoyos: this.apoyoService.GetRecordList(),
      organizaciones: this.organizacionService.GetRecordList()
    }).pipe(
      map(response => {
        const { apoyos, organizaciones } = response;

        return apoyos.map(apoyo => {
          const organizacion = organizaciones.find(o => o.id === apoyo.Id_Organizacion);
          return {
            ...apoyo,
            Nombre_Organizacion: organizacion ? organizacion.Nombre : 'N/A'
          };
        });
      })
    );
  }

  GetApoyoSocioeconomicosWithApoyoNames(): Observable<any[]> {
    return forkJoin({
      apoyoSocioeconomicos: this.apoyoSocioeconomicoService.GetRecordList(),
      apoyos: this.apoyoService.GetRecordList()
    }).pipe(
      map(response => {
        const { apoyoSocioeconomicos, apoyos } = response;

        return apoyoSocioeconomicos.map(apoyoSocioeconomico => {
          const apoyo = apoyos.find(a => a.id === apoyoSocioeconomico.Id_Apoyo);
          return {
            ...apoyoSocioeconomico,
            Nombre_Apoyo: apoyo ? apoyo.Nombre : 'N/A'
          };
        });
      })
    );
  }

  GetProcesoConvocatoriasWithConvocatoriaNames(): Observable<any[]> {
    return forkJoin({
      procesoConvocatorias: this.procesoConvocatoriaService.GetRecordList(),
      convocatorias: this.convocatoriaService.GetRecordList()
    }).pipe(
      map(response => {
        const { procesoConvocatorias, convocatorias } = response;

        return procesoConvocatorias.map(procesoConvocatoria => {
          const convocatoria = convocatorias.find(c => c.id === procesoConvocatoria.Id_Convocatoria);
          return {
            ...procesoConvocatoria,
            Nombre_Convocatoria: convocatoria ? convocatoria.Ano : 'N/A'
          };
        });
      })
    );
  }

  GetConvocatoriasWithApoyoNames(): Observable<any[]> {
    return forkJoin({
      convocatorias: this.convocatoriaService.GetRecordList(),
      apoyosSocioeconomicos: this.apoyoSocioeconomicoService.GetRecordList()
    }).pipe(
      map(response => {
        const { convocatorias, apoyosSocioeconomicos } = response;

        return convocatorias.map(convocatoria => {
          const apoyoSocioeconomico = apoyosSocioeconomicos.find(a => a.id === convocatoria.Id_Apoyo_Socio_Economico);
          return {
            ...convocatoria,
            Nombre_Apoyo_Socio_Economico: apoyoSocioeconomico ? apoyoSocioeconomico.Ano : 'N/A'
          };
        });
      })
    );
  }

  GetEstudiantesWithDetails(): Observable<any[]> {
    return forkJoin({
      estudiantes: this.estudianteService.GetRecordList(),
      municipios: this.municipioService.GetRecordList(),
      contactos: this.contactoService.GetRecordList(),
      programas: this.programaService.GetRecordList()
    }).pipe(
      map(response => {
        const { estudiantes, municipios, contactos, programas } = response;

        return estudiantes.map(estudiante => {
          const municipioNacimiento = municipios.find(m => m.id === estudiante.Id_Municipio_Nacimiento);
          const municipioVivienda = municipios.find(m => m.id === estudiante.Id_Municipio_Vivienda);
          const contacto = contactos.find(c => c.id === estudiante.Id_Contacto);
          const programa = programas.find(p => p.id === estudiante.Id_Programa_Academico);

          return {
            ...estudiante,
            Nombre_Municipio_Nacimiento: municipioNacimiento ? municipioNacimiento.Nombre : 'N/A',
            Nombre_Municipio_Vivienda: municipioVivienda ? municipioVivienda.Nombre : 'N/A',
            Nombre_Contacto: contacto ? contacto.Nombre : 'N/A',
            Nombre_Programa_Academico: programa ? programa.Nombre : 'N/A'
          };
        });
      })
    );
  }
}
