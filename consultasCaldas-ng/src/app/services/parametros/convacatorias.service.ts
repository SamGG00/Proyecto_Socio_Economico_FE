import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ConvacatoriaModel } from 'src/app/models/parametros/convacatoria.model';

@Injectable({
  providedIn: 'root'
})
export class ConvacatoriasService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { }

  GetRecordList(): Observable<ConvacatoriaModel[]> {
    return this.http.get<ConvacatoriaModel[]>(`${this.url}/convocatorias`);
  }

  SearchRecord(id: number): Observable<ConvacatoriaModel> {
    return this.http.get<ConvacatoriaModel>(`${this.url}/convocatorias/${id}`);
  }

  SaveRecord(data: ConvacatoriaModel): Observable<ConvacatoriaModel> {
    return this.http.post<ConvacatoriaModel>(`${this.url}/convocatorias`, {
      Ano: data.Ano,
      Semestre: data.Semestre,
      Total_Estudiantes_Presentados: data.Total_Estudiantes_Presentados,
      Autor: data.Autor,
      Fecha_Inicio: data.Fecha_Inicio,
      Fecha_Fin: data.Fecha_Fin,
      Id_Apoyo_Socio_Economico: data.Id_Apoyo_Socio_Economico
    });
  }

  EditRecord(data: ConvacatoriaModel): Observable<ConvacatoriaModel> {
    return this.http.put<ConvacatoriaModel>(`${this.url}/convocatorias/${data.id}`, {
      Ano: data.Ano,
      Semestre: data.Semestre,
      Total_Estudiantes_Presentados: data.Total_Estudiantes_Presentados,
      Autor: data.Autor,
      Fecha_Inicio: data.Fecha_Inicio,
      Fecha_Fin: data.Fecha_Fin,
      Id_Apoyo_Socio_Economico: data.Id_Apoyo_Socio_Economico
    });
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/convocatorias/${id}`);
  }
}
