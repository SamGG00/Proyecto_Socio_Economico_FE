import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EstudianteModel } from 'src/app/models/parametros/estudiante.model';
import { EstudianteService } from 'src/app/services/parametros/estudiante.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-remover',
  templateUrl: './remover.component.html',
  styleUrls: ['./remover.component.css']
})
export class RemoverComponent implements OnInit {

  Codigo_Estudiante: string = "";
  Nombre: string = "";
  Genero: string = "";
  Edad: number = 0;
  Tipo_Identificacion: string = "";
  Numero_De_Identificacion: string = "";
  PBM: number = 0;
  Correo: string = "";
  Celular: string = "";
  Estrato: number = 0;
  Promedio_Notas: number = 0;
  Puntaje_De_Apoyos: number = 0;
  Estado: string = "";
  Autor: string = "";

  constructor(
    private router: Router,
    private service: EstudianteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: EstudianteModel) => {
        if(data.Codigo_Estudiante){
          this.Codigo_Estudiante = data.Codigo_Estudiante;
          this.Nombre = data.Nombre!;
          this.Genero = data.Genero!;
          this.Edad = data.Edad!;
          this.PBM = data.PBM!;
          this.Correo = data.Correo!;
          this.Celular = data.Celular!;
          this.Estrato = data.Estrato!;
          this.Promedio_Notas = data.Promedio_Notas!;
          this.Puntaje_De_Apoyos = data.Puntaje_De_Apoyos!;
          this.Estado = data.Estado!;
          this.Autor = data.Autor!;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.Codigo_Estudiante).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
