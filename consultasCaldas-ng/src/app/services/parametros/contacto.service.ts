import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactoModel } from 'src/app/models/parametros/contacto.model';
import { ConfigurationData } from 'src/app/config/ConfigurationData';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { }

  GetRecordList(): Observable<ContactoModel[]> {
    return this.http.get<ContactoModel[]>(`${this.url}/contactos`);
  }

  SaveRecord(data: ContactoModel): Observable<ContactoModel> {
    return this.http.post<ContactoModel>(`${this.url}/contactos`,
      {
        Nombre: data.Nombre,
        Parentesco: data.Parentesco,
        Celular: data.Celular,
        Procedencia: data.Procedencia,
        Correo: data.Correo
      },
      {
        // Additional HTTP options can be specified here if needed
      }
    );
  }
}
