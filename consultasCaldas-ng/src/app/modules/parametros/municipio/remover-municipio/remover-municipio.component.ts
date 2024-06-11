import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { MunicipioModel } from 'src/app/models/parametros/municipio.model';
import { MunicipioService } from 'src/app/services/parametros/municipio.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-remover-municipio',
  templateUrl: './remover-municipio.component.html',
  styleUrls: ['./remover-municipio.component.css']
})
export class RemoverMunicipioComponent implements OnInit {

  id: number = 0;
  Nombre: string = "";

  constructor(
    private router: Router,
    private service: MunicipioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: MunicipioModel) => {
        if(data.id){
          this.id = data.id;
          this.Nombre = data.Nombre!;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-municipio"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
