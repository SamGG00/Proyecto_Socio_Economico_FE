import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EstudianteModel } from 'src/app/models/parametros/estudiante.model';

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

  // New method to upload Excel file
  uploadExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.url}/upload/EstudianteModel`, formData, {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data' // No need to set this header explicitly, Angular will do it automatically
      })
    });
  }
}
