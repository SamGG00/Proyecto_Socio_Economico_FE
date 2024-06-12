import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProgramaModel } from 'src/app/models/parametros/programa.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { }

  GetRecordList(): Observable<ProgramaModel[]> {
    return this.http.get<ProgramaModel[]>(`${this.url}/programas`);
  }

  SearchRecord(id: number): Observable<ProgramaModel> {
    return this.http.get<ProgramaModel>(`${this.url}/programas/${id}`);
  }

  SaveRecord(data: ProgramaModel): Observable<ProgramaModel> {
    return this.http.post<ProgramaModel>(`${this.url}/programas`, {
      Nombre: data.Nombre,
      Codigo_SNIES: data.Codigo_SNIES,
      Duracion_Semestres: data.Duracion_Semestres,
      Id_Facultad: data.Id_Facultad
    });
  }

  EditRecord(data: ProgramaModel): Observable<ProgramaModel> {
    return this.http.put<ProgramaModel>(`${this.url}/programas/${data.id}`, {
      Nombre: data.Nombre,
      Codigo_SNIES: data.Codigo_SNIES,
      Duracion_Semestres: data.Duracion_Semestres,
      Id_Facultad: data.Id_Facultad
    });
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/programas/${id}`);
  }

  // New method to upload Excel file
  uploadExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.url}/upload/ProgramaModel`, formData, {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data' // No need to set this header explicitly, Angular will do it automatically
      })
    });
  }
}
