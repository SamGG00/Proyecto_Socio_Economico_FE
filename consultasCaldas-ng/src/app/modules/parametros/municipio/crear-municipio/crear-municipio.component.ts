import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { MunicipioModel } from 'src/app/models/parametros/municipio.model';
import { MunicipioService } from 'src/app/services/parametros/municipio.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-crear-municipio',
  templateUrl: './crear-municipio.component.html',
  styleUrls: ['./crear-municipio.component.css']
})
export class CrearMunicipioComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: MunicipioService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      Nombre: ["", [Validators.required]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new MunicipioModel();
    model.Nombre = this.GetDF["Nombre"].value;

    this.service.SaveRecord(model).subscribe({
      next: (data: MunicipioModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-municipio"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
