import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { FacultadModel } from 'src/app/models/parametros/facultad.model';

@Injectable({
  providedIn: 'root'
})
export class FacultadService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { 
  }
  GetRecordList(): Observable<FacultadModel[]> {
    return this.http.get<FacultadModel[]>(`${this.url}/facultades`)
  }

  SaveRecord(data: FacultadModel): Observable<FacultadModel> {
    return this.http.post<FacultadModel>(`${this.url}/facultades`,
      {
        Nombre: data.Nombre
      },
      {
        // Additional HTTP options can be specified here if needed
      }
    );
  }
}
