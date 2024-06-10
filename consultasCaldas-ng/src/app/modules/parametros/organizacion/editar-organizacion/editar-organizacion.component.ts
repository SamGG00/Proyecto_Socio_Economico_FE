import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { OrganizacionModel } from 'src/app/models/parametros/organizacion.modelo';
import { OrganizacionService } from 'src/app/services/parametros/organizacion.service';
declare const ShowGeneralMessage:any;
@Component({
  selector: 'app-editar-organizacion',
  templateUrl: './editar-organizacion.component.html',
  styleUrls: ['./editar-organizacion.component.css']
})
export class EditarOrganizacionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: OrganizacionService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      Nombre: ["", [Validators.required]],
      Correo: ["", [Validators.required, Validators.email]],
      Celular: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: OrganizacionModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["Nombre"].setValue(data.Nombre);
        this.GetDF["Correo"].setValue(data.Correo);
        this.GetDF["Celular"].setValue(data.Celular);
      }
    });
  }

  SaveRecord() {
    let model = new OrganizacionModel();
    model.id = this.GetDF["id"].value;
    model.Nombre = this.GetDF["Nombre"].value;
    model.Correo = this.GetDF["Correo"].value;
    model.Celular = this.GetDF["Celular"].value;

    this.service.EditRecord(model).subscribe({
      next: (data: OrganizacionModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["/parametros/listar-organizacion"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
