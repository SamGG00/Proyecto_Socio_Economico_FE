import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoModel } from 'src/app/models/parametros/apoyo.model';
import { ApoyosService } from 'src/app/services/parametros/apoyos.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-remover-apoyo',
  templateUrl: './remover-apoyo.component.html',
  styleUrls: ['./remover-apoyo.component.css']
})
export class RemoverApoyoComponent implements OnInit {
  id: number = 0;
  Nombre: string = "";

  constructor(
    private router: Router,
    private service: ApoyosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  
  SearchRecord() {
    let id = this.route.snapshot.params["id"]
    this.service.SearchRecord(id).subscribe({
      next: (data: ApoyoModel) => {
        if(data.id && data.Nombre){
          this.id = data.id;
          this.Nombre = data.Nombre;
        }
      }
    })
  }

  RemoveRecord(){
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE)
        this.router.navigate(["/parametros/listar-apoyo"])
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE)
        console.error(err);
      }
    })
  }

}
