import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ContactoModel } from 'src/app/models/parametros/contacto.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { 
  }

  GetRecordList(): Observable<ContactoModel[]> {
    return this.http.get<ContactoModel[]>(`${this.url}/contactos`);
  }

  SearchRecord(id: number): Observable<ContactoModel> {
    return this.http.get<ContactoModel>(`${this.url}/contactos/${id}`);
  }

  SaveRecord(data: ContactoModel): Observable<ContactoModel> {
    return this.http.post<ContactoModel>(`${this.url}/contactos`, {
      Nombre: data.Nombre,
      Parentesco: data.Parentesco,
      Celular: data.Celular,
      Procedencia: data.Procedencia,
      Correo: data.Correo
    });
  }

  EditRecord(data: ContactoModel): Observable<ContactoModel> {
    return this.http.put<ContactoModel>(`${this.url}/contactos/${data.id}`, {
      Nombre: data.Nombre,
      Parentesco: data.Parentesco,
      Celular: data.Celular,
      Procedencia: data.Procedencia,
      Correo: data.Correo
    });
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/contactos/${id}`);
  }

  // New method to upload Excel file
  uploadExcel(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.url}/upload/ContactoModel`, formData, {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data' // No need to set this header explicitly, Angular will do it automatically
      })
    });
  }
}
