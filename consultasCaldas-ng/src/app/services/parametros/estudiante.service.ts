import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EstudianteModel } from 'src/app/models/parametros/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  url: string = ConfigurationData.BUSSINESS_MS_URL;

  constructor(private http: HttpClient) { 
  }
  GetRecordList(): Observable<EstudianteModel[]> {
    return this.http.get<EstudianteModel[]>(`${this.url}/estudiantes`)
  }
}
