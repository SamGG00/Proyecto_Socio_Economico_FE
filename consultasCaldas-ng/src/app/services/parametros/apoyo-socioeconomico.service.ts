import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoSocioeconomicoModel } from 'src/app/models/parametros/apoyo-socioeconomico.model';

@Injectable({
  providedIn: 'root'
})
export class ApoyoSocioeconomicoService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { 
  }
  GetRecordList(): Observable<ApoyoSocioeconomicoModel[]> {
    return this.http.get<ApoyoSocioeconomicoModel[]>(`${this.url}/apoyo-socioeconomicos`)
  }
}
