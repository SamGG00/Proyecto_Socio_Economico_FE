import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstudianteModel } from 'src/app/models/parametros/estudiante.model';
import { ConfigurationData } from 'src/app/config/ConfigurationData';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { }

  GetRecordList(): Observable<EstudianteModel[]> {
    return this.http.get<EstudianteModel[]>(`${this.url}/estudiantes`);
  }

  SaveRecord(data: EstudianteModel): Observable<EstudianteModel> {
    return this.http.post<EstudianteModel>(`${this.url}/estudiantes`,
      {
        Codigo_Estudiante: data.Codigo_Estudiante,
        Nombre: data.Nombre,
        Genero: data.Genero,
        Edad: data.Edad,
        Tipo_Identificacion: data.Tipo_Identificacion,
        Numero_De_Identificacion: data.Numero_De_Identificacion,
        PBM: data.PBM,
        Correo: data.Correo,
        Celular: data.Celular,
        Estrato: data.Estrato,
        Promedio_Notas: data.Promedio_Notas,
        Puntaje_De_Apoyos: data.Puntaje_De_Apoyos,
        Estado: data.Estado,
        Ultimo_Semestre_Cursado: data.Ultimo_Semestre_Cursado,
        Hijos: data.Hijos,
        Autor: data.Autor,
        Retiros_Bajo_Rendimiento: data.Retiros_Bajo_Rendimiento,
        Sanciones_Disciplinarias: data.Sanciones_Disciplinarias,
        Aspirante_Especial: data.Aspirante_Especial,
        Semestre_Bajo_Rendimiento: data.Semestre_Bajo_Rendimiento,
        Semestre_Sancion: data.Semestre_Sancion,
        Tipo_De_Aspirante: data.Tipo_De_Aspirante,
        Id_Municipio_Nacimiento: data.Id_Municipio_Nacimiento,
        Id_Municipio_Vivienda: data.Id_Municipio_Vivienda,
        Id_Contacto: data.Id_Contacto,
        Id_Programa_Academico: data.Id_Programa_Academico
      },
      {
        // Additional HTTP options can be specified here if needed
      }
    );
  }
}
