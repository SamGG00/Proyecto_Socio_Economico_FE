import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoSocioeconomicoModel } from 'src/app/models/parametros/apoyo-socioeconomico.model';

@Injectable({
  providedIn: 'root'
})
export class ApoyoSocioeconomicoService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { 
  }
  GetRecordList(): Observable<ApoyoSocioeconomicoModel[]> {
    return this.http.get<ApoyoSocioeconomicoModel[]>(`${this.url}/apoyo-socioeconomicos`)
  }

  SearchRecord(id: number): Observable<ApoyoSocioeconomicoModel> {
    return this.http.get<ApoyoSocioeconomicoModel>(`${this.url}/apoyo-socioeconomicos/${id}`)
  }

  SaveRecord(data: ApoyoSocioeconomicoModel): Observable<ApoyoSocioeconomicoModel> {
    return this.http.post<ApoyoSocioeconomicoModel>(`${this.url}/apoyo-socioeconomicos`,
      {
        Semestre: data.Semestre,
        Ano: data.Ano,
        Estudiantes_Aprobados: data.Estudiantes_Aprobados,
        Sede_Apoyo: data.Sede_Apoyo,
        Autor: data.Autor,
        Id_Apoyo: data.Id_Apoyo
      }
    );
  }

  EditRecord(data: ApoyoSocioeconomicoModel): Observable<ApoyoSocioeconomicoModel> {
    return this.http.put<ApoyoSocioeconomicoModel>(`${this.url}/apoyo-socioeconomicos/${data.id}`, {
        Semestre: data.Semestre,
        Ano: data.Ano,
        Estudiantes_Aprobados: data.Estudiantes_Aprobados,
        Sede_Apoyo: data.Sede_Apoyo,
        Autor: data.Autor,
        Id_Apoyo: data.Id_Apoyo
    });
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/apoyo-socioeconomicos/${id}`);
  }
}
