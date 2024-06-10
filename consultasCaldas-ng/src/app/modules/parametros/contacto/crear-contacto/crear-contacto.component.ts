import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactoModel } from 'src/app/models/parametros/contacto.model';
import { ContactoService } from 'src/app/services/parametros/contacto.service';
import { ConfigurationData } from 'src/app/config/ConfigurationData';

declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-crear-contacto',
  templateUrl: './crear-contacto.component.html',
  styleUrls: ['./crear-contacto.component.css']
})
export class CrearContactoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ContactoService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      Nombre: ["", [Validators.required]],
      Parentesco: ["", [Validators.required]],
      Celular: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Procedencia: ["", [Validators.required]],
      Correo: ["", [Validators.required, Validators.email]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new ContactoModel();
    model.Nombre = this.GetDF["Nombre"].value;
    model.Parentesco = this.GetDF["Parentesco"].value;
    model.Celular = this.GetDF["Celular"].value;
    model.Procedencia = this.GetDF["Procedencia"].value;
    model.Correo = this.GetDF["Correo"].value;

    this.service.SaveRecord(model).subscribe({
      next: (data: ContactoModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-contacto"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }
}
