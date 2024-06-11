import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { OrganizacionModel } from 'src/app/models/parametros/organizacion.modelo';
import { OrganizacionService } from 'src/app/services/parametros/organizacion.service';
declare const ShowGeneralMessage: any; 
@Component({
  selector: 'app-remover-organizacion',
  templateUrl: './remover-organizacion.component.html',
  styleUrls: ['./remover-organizacion.component.css']
})
export class RemoverOrganizacionComponent implements OnInit {

  id: number = 0;
  Nombre: string = "";
  Correo: string = "";
  Celular: string = "";

  constructor(
    private router: Router,
    private service: OrganizacionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: OrganizacionModel) => {
        if(data.id){
          this.id = data.id;
          this.Nombre = data.Nombre!;
          this.Correo = data.Correo!;
          this.Celular = data.Celular!;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-organizacion"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
