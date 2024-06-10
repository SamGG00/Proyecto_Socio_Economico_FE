import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProgramaModel } from 'src/app/models/parametros/programa.modelo';
import { ProgramaService } from 'src/app/services/parametros/programa.service';

declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-crear-programa',
  templateUrl: './crear-programa.component.html',
  styleUrls: ['./crear-programa.component.css']
})
export class CrearProgramaComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProgramaService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      Nombre: ["", [Validators.required]],
      Codigo_SNIES: ["", [Validators.required]],
      Duracion_Semestres: [0, [Validators.required, Validators.min(1)]],
      Id_Facultad: [0, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new ProgramaModel();
    model.Nombre = this.GetDF["Nombre"].value;
    model.Codigo_SNIES = this.GetDF["Codigo_SNIES"].value;
    model.Duracion_Semestres = Number(this.GetDF["Duracion_Semestres"].value);
    model.Id_Facultad = Number(this.GetDF["Id_Facultad"].value);

    this.service.SaveRecord(model).subscribe({
      next: (data: ProgramaModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-programa"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
