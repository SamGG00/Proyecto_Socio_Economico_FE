import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoModel } from 'src/app/models/parametros/apoyo.model';

@Injectable({
  providedIn: 'root'
})
export class ApoyosService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { 
  }
  GetRecordList(): Observable<ApoyoModel[]> {
    return this.http.get<ApoyoModel[]>(`${this.url}/apoyos`)
  }
  
  SaveRecord(data: ApoyoModel): Observable<ApoyoModel> {
    return this.http.post<ApoyoModel>(`${this.url}/apoyos`,
      {
        Nombre: data.Nombre,
        Interno: data.Interno,
        Id_Organizacion: data.Id_Organizacion
      },
      {
        
      }
    );
  }
}
