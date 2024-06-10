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

  constructor(private http: HttpClient) { 
  }
  GetRecordList(): Observable<MunicipioModel[]> {
    return this.http.get<MunicipioModel[]>(`${this.url}/municipios`)
  }

  SaveRecord(data: MunicipioModel): Observable<MunicipioModel> {
    return this.http.post<MunicipioModel>(`${this.url}/municipios`,
      {
        Nombre: data.Nombre
      },
      {
        // Additional HTTP options can be specified here if needed
      }
    );
  }
}
