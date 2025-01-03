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

  SearchRecord(id: number): Observable<ApoyoModel> {
    return this.http.get<ApoyoModel>(`${this.url}/apoyos/${id}`)
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

  EditRecord(data: ApoyoModel): Observable<ApoyoModel> {
    return this.http.put<ApoyoModel>(`${this.url}/apoyos/${data.id}`,
      {
        Nombre: data.Nombre,
        Interno: data.Interno,
        Id_Organizacion: data.Id_Organizacion
      }
    );
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/apoyos/${id}`)
  }

  // New method to upload Excel file
  uploadExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.url}/upload/ApoyoModel`, formData, {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data' // No need to set this header explicitly, Angular will do it automatically
      })
    });
  }

  GetApoyoNameById(id: number): Observable<string> {
    return this.http.get<string>(`${this.url}/apoyos/name/${id}`);
  }
}
