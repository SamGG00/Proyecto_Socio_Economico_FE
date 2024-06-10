import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ConvacatoriaModel } from 'src/app/models/parametros/convacatoria.model';
import { ConvacatoriasService } from 'src/app/services/parametros/convacatorias.service';
declare const ShowGeneralMessage: any;

@Component({
  selector: 'app-crear-convacatoria',
  templateUrl: './crear-convacatoria.component.html',
  styleUrls: ['./crear-convacatoria.component.css']
})
export class CrearConvacatoriaComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ConvacatoriasService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      Ano: [0, [Validators.required, Validators.min(1), Validators.max(12)]],
      Semestre: [0, [Validators.required]],
      Total_Estudiantes_Presentados: [0, [Validators.required, Validators.min(0)]],
      Autor: ["", [Validators.required]],
      Fecha_Inicio: ["", [Validators.required]],
      Fecha_Fin: ["", [Validators.required]],
      Id_Apoyo_Socio_Economico: [0, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new ConvacatoriaModel();
    model.Ano = Number(this.GetDF["Ano"].value);
    model.Semestre = Number(this.GetDF["Semestre"].value);
    model.Total_Estudiantes_Presentados = Number(this.GetDF["Total_Estudiantes_Presentados"].value);
    model.Autor = this.GetDF["Autor"].value;
    model.Fecha_Inicio = new Date(this.GetDF["Fecha_Inicio"].value);
    model.Fecha_Fin = new Date(this.GetDF["Fecha_Fin"].value);
    model.Id_Apoyo_Socio_Economico = Number(this.GetDF["Id_Apoyo_Socio_Economico"].value);

    this.service.SaveRecord(model).subscribe({
      next: (data: ConvacatoriaModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-convacatoria"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
