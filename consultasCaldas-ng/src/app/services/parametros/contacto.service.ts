import { HttpClient } from '@angular/common/http';
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
    return this.http.get<ContactoModel[]>(`${this.url}/contacto`)
  }
}
