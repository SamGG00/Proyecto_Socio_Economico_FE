import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProcesoConvocatoriaModel } from 'src/app/models/parametros/proceso-convocatoria.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProcesoConvocatoriaService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { 
  }
  GetRecordList(): Observable<ProcesoConvocatoriaModel[]> {
    return this.http.get<ProcesoConvocatoriaModel[]>(`${this.url}/proceso-convocatorias`)
  }

  SearchRecord(id: number): Observable<ProcesoConvocatoriaModel> {
    return this.http.get<ProcesoConvocatoriaModel>(`${this.url}/proceso-convocatorias/${id}`);
  }

  SaveRecord(data: ProcesoConvocatoriaModel): Observable<ProcesoConvocatoriaModel> {
    return this.http.post<ProcesoConvocatoriaModel>(`${this.url}/proceso-convocatorias`, {
      Aprobado: data.Aprobado,
      Ano: data.Ano,
      Semestre: data.Semestre,
      Id_Convocatoria: data.Id_Convocatoria
    });
  }

  EditRecord(data: ProcesoConvocatoriaModel): Observable<ProcesoConvocatoriaModel> {
    return this.http.put<ProcesoConvocatoriaModel>(`${this.url}/proceso-convocatorias/${data.id}`, {
      Aprobado: data.Aprobado,
      Ano: data.Ano,
      Semestre: data.Semestre,
      Id_Convocatoria: data.Id_Convocatoria
    });
  }
}
