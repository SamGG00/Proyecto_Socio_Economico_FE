import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ContactoModel } from 'src/app/models/parametros/contacto.model';
import { ContactoService } from 'src/app/services/parametros/contacto.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-remover-contacto',
  templateUrl: './remover-contacto.component.html',
  styleUrls: ['./remover-contacto.component.css']
})
export class RemoverContactoComponent implements OnInit {

  id: number = 0;
  Nombre: string = "";
  Parentesco: string = "";
  Celular: string = "";
  Procedencia: string = "";
  Correo: string = "";

  constructor(
    private router: Router,
    private service: ContactoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.SearchRecord();
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ContactoModel) => {
        if(data.id){
          this.id = data.id;
          this.Nombre = data.Nombre!;
          this.Parentesco = data.Parentesco!;
          this.Celular = data.Celular!;
          this.Procedencia = data.Procedencia!;
          this.Correo = data.Correo!;
        }
      }
    });
  }

  RemoveRecord() {
    this.service.RemoveRecord(this.id).subscribe({
      next: (data: any) => {
        ShowGeneralMessage(ConfigurationData.REMOVED_MESSAGE);
        this.router.navigate(["/parametros/listar-contacto"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
