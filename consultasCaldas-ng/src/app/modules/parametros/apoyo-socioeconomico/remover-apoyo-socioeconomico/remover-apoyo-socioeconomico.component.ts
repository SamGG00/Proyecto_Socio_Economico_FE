import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoSocioeconomicoModel } from 'src/app/models/parametros/apoyo-socioeconomico.model';
import { ApoyoSocioeconomicoService } from 'src/app/services/parametros/apoyo-socioeconomico.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-remover-apoyo-socioeconomico',
  templateUrl: './remover-apoyo-socioeconomico.component.html',
  styleUrls: ['./remover-apoyo-socioeconomico.component.css']
})
export class RemoverApoyoSocioeconomicoComponent implements OnInit {

  id: number = 0;
  Semestre: number = 0;
  Ano: Date = new Date();
  Estudiantes_Aprobados: number = 0;
  Sede_Apoyo: string = "";
  Autor: string = "";
  Id_Apoyo: number = 0;

  constructor(
    private router: Router,
    private service: ApoyoSocioeconomicoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ApoyoSocioeconomicoModel) => {
        if(data.id){
          this.id = data.id;
          this.Semestre = data.Semestre!;
          this.Ano = data.Ano!;
          this.Estudiantes_Aprobados = data.Estudiantes_Aprobados!;
          this.Sede_Apoyo = data.Sede_Apoyo!;
          this.Autor = data.Autor!;
          this.Id_Apoyo = data.Id_Apoyo!;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-apoyo-socioeconomico"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
