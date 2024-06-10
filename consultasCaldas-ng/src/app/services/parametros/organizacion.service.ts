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

  constructor(private http: HttpClient) { 
  }
  GetRecordList(): Observable<MunicipioModel[]> {
    return this.http.get<MunicipioModel[]>(`${this.url}/organizaciones`)
  }

  SaveRecord(data: OrganizacionModel): Observable<OrganizacionModel> {
    return this.http.post<OrganizacionModel>(`${this.url}/organizaciones`,
      {
        Nombre: data.Nombre,
        Correo: data.Correo,
        Celular: data.Celular
      },
      {
        // Additional HTTP options can be specified here if needed
      }
    );
  }
}
