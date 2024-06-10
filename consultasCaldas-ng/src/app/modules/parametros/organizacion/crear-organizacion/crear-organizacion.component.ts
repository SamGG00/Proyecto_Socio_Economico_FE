import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { OrganizacionModel } from 'src/app/models/parametros/organizacion.modelo';
import { OrganizacionService } from 'src/app/services/parametros/organizacion.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-crear-organizacion',
  templateUrl: './crear-organizacion.component.html',
  styleUrls: ['./crear-organizacion.component.css']
})
export class CrearOrganizacionComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: OrganizacionService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      Nombre: ["", [Validators.required]],
      Correo: ["", [Validators.required, Validators.email]],
      Celular: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new OrganizacionModel();
    model.Nombre = this.GetDF["Nombre"].value;
    model.Correo = this.GetDF["Correo"].value;
    model.Celular = this.GetDF["Celular"].value;

    this.service.SaveRecord(model).subscribe({
      next: (data: OrganizacionModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-organizacion"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
