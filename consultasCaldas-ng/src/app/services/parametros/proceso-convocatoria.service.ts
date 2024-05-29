import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProcesoConvocatoriaModel } from 'src/app/models/parametros/proceso-convocatoria.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProcesoConvocatoriaService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { 
  }
  GetRecordList(): Observable<ProcesoConvocatoriaModel[]> {
    return this.http.get<ProcesoConvocatoriaModel[]>(`${this.url}/contacto`)
  }
}
