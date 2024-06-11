import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ConvacatoriaModel } from 'src/app/models/parametros/convacatoria.model';
import { ConvacatoriasService } from 'src/app/services/parametros/convacatorias.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-remover-convacatoria',
  templateUrl: './remover-convacatoria.component.html',
  styleUrls: ['./remover-convacatoria.component.css']
})
export class RemoverConvacatoriaComponent implements OnInit {

  id: number = 0;
  Ano: number = 0;
  Semestre: number = 0;
  Total_Estudiantes_Presentados: number = 0;
  Autor: string = "";
  Fecha_Inicio: Date = new Date();
  Fecha_Fin: Date = new Date();
  Id_Apoyo_Socio_Economico: number = 0;

  constructor(
    private router: Router,
    private service: ConvacatoriasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ConvacatoriaModel) => {
        if(data.id){
          this.id = data.id;
          this.Ano = data.Ano!;
          this.Semestre = data.Semestre!;
          this.Total_Estudiantes_Presentados = data.Total_Estudiantes_Presentados!;
          this.Autor = data.Autor!;
          this.Fecha_Inicio = data.Fecha_Inicio!;
          this.Fecha_Fin = data.Fecha_Fin!;
          this.Id_Apoyo_Socio_Economico = data.Id_Apoyo_Socio_Economico!;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-convacatoria"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
