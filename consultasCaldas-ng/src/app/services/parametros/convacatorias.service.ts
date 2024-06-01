import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ConvacatoriaModel } from 'src/app/models/parametros/convacatoria.model';

@Injectable({
  providedIn: 'root'
})
export class ConvacatoriasService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) {
    
  }

  GetRecordList(): Observable<ConvacatoriaModel[]> {
    return this.http.get<ConvacatoriaModel[]>(`${this.url}/convocatorias`)
  }
}
