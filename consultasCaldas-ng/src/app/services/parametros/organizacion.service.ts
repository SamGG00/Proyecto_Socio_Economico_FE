import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { MunicipioModel } from 'src/app/models/parametros/municipio.model';
import { OrganizacionModel } from 'src/app/models/parametros/organizacion.modelo';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { }

  GetRecordList(): Observable<OrganizacionModel[]> {
    return this.http.get<OrganizacionModel[]>(`${this.url}/organizaciones`);
  }

  SearchRecord(id: number): Observable<OrganizacionModel> {
    return this.http.get<OrganizacionModel>(`${this.url}/organizaciones/${id}`);
  }

  SaveRecord(data: OrganizacionModel): Observable<OrganizacionModel> {
    return this.http.post<OrganizacionModel>(`${this.url}/organizaciones`, {
      Nombre: data.Nombre,
      Correo: data.Correo,
      Celular: data.Celular
    });
  }

  EditRecord(data: OrganizacionModel): Observable<OrganizacionModel> {
    return this.http.put<OrganizacionModel>(`${this.url}/organizaciones/${data.id}`, {
      Nombre: data.Nombre,
      Correo: data.Correo,
      Celular: data.Celular
    });
  }

  RemoveRecord(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/organizaciones/${id}`);
  }
}
