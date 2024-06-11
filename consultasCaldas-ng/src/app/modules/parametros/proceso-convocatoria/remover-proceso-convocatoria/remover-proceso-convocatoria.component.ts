import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProcesoConvocatoriaModel } from 'src/app/models/parametros/proceso-convocatoria.modelo';
import { ProcesoConvocatoriaService } from 'src/app/services/parametros/proceso-convocatoria.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-remover-proceso-convocatoria',
  templateUrl: './remover-proceso-convocatoria.component.html',
  styleUrls: ['./remover-proceso-convocatoria.component.css']
})
export class RemoverProcesoConvocatoriaComponent implements OnInit {

  id: number = 0;
  Aprobado: boolean = false;
  Ano: number = 0;
  Semestre: number = 0;
  Id_Convocatoria: number = 0;

  constructor(
    private router: Router,
    private service: ProcesoConvocatoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ProcesoConvocatoriaModel) => {
        if(data.id){
          this.id = data.id;
          this.Aprobado = data.Aprobado!;
          this.Ano = data.Ano!;
          this.Semestre = data.Semestre!;
          this.Id_Convocatoria = data.Id_Convocatoria!;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-proceso-convocatoria"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
