import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ContactoModel } from 'src/app/models/parametros/contacto.model';
import { ContactoService } from 'src/app/services/parametros/contacto.service';
declare const ShowGeneralMessage:any;
@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.component.html',
  styleUrls: ['./editar-contacto.component.css']
})
export class EditarContactoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ContactoService,
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
      Parentesco: ["", [Validators.required]],
      Celular: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Procedencia: ["", [Validators.required]],
      Correo: ["", [Validators.required, Validators.email]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ContactoModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["Nombre"].setValue(data.Nombre);
        this.GetDF["Parentesco"].setValue(data.Parentesco);
        this.GetDF["Celular"].setValue(data.Celular);
        this.GetDF["Procedencia"].setValue(data.Procedencia);
        this.GetDF["Correo"].setValue(data.Correo);
      }
    });
  }

  SaveRecord() {
    let model = new ContactoModel();
    model.id = this.GetDF["id"].value;
    model.Nombre = this.GetDF["Nombre"].value;
    model.Parentesco = this.GetDF["Parentesco"].value;
    model.Celular = this.GetDF["Celular"].value;
    model.Procedencia = this.GetDF["Procedencia"].value;
    model.Correo = this.GetDF["Correo"].value;

    this.service.EditRecord(model).subscribe({
      next: (data: ContactoModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["/parametros/listar-contacto"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
