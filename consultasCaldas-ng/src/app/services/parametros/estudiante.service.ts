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

  SearchRecord(id: string): Observable<EstudianteModel> {
    return this.http.get<EstudianteModel>(`${this.url}/estudiantes/${id}`);
  }

  SaveRecord(data: EstudianteModel): Observable<EstudianteModel> {
    return this.http.post<EstudianteModel>(`${this.url}/estudiantes`, data);
  }

  EditRecord(data: EstudianteModel): Observable<EstudianteModel> {
    return this.http.put<EstudianteModel>(`${this.url}/estudiantes/${data.Codigo_Estudiante}`, data);
  }

  RemoveRecord(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/estudiantes/${id}`);
  }
}
