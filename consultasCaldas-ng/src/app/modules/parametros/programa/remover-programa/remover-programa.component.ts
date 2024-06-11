import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProgramaModel } from 'src/app/models/parametros/programa.modelo';
import { ProgramaService } from 'src/app/services/parametros/programa.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-remover-programa',
  templateUrl: './remover-programa.component.html',
  styleUrls: ['./remover-programa.component.css']
})
export class RemoverProgramaComponent implements OnInit {

  id: number = 0;
  Nombre: string = "";
  Codigo_SNIES: string = "";
  Duracion_Semestres: number = 0;
  Id_Facultad: number = 0;

  constructor(
    private router: Router,
    private service: ProgramaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ProgramaModel) => {
        if(data.id){
          this.id = data.id;
          this.Nombre = data.Nombre!;
          this.Codigo_SNIES = data.Codigo_SNIES!;
          this.Duracion_Semestres = data.Duracion_Semestres!;
          this.Id_Facultad = data.Id_Facultad!;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-programa"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
