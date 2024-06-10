import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { MunicipioModel } from 'src/app/models/parametros/municipio.model';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { }

  GetRecordList(): Observable<MunicipioModel[]> {
    return this.http.get<MunicipioModel[]>(`${this.url}/municipios`);
  }

  SearchRecord(id: number): Observable<MunicipioModel> {
    return this.http.get<MunicipioModel>(`${this.url}/municipios/${id}`);
  }

  SaveRecord(data: MunicipioModel): Observable<MunicipioModel> {
    return this.http.post<MunicipioModel>(`${this.url}/municipios`, {
      Nombre: data.Nombre
    });
  }

  EditRecord(data: MunicipioModel): Observable<MunicipioModel> {
    return this.http.put<MunicipioModel>(`${this.url}/municipios/${data.id}`, {
      Nombre: data.Nombre
    });
  }
}
