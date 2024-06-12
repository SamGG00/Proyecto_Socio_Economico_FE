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
    private contactoService: ContactoService
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
}
