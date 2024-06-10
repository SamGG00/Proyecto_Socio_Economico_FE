import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ConvacatoriaModel } from 'src/app/models/parametros/convacatoria.model';
import { ConvacatoriasService } from 'src/app/services/parametros/convacatorias.service';
declare const ShowGeneralMessage:any;
@Component({
  selector: 'app-editar-convacatoria',
  templateUrl: './editar-convacatoria.component.html',
  styleUrls: ['./editar-convacatoria.component.css']
})
export class EditarConvacatoriaComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ConvacatoriasService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      Ano: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Semestre: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Total_Estudiantes_Presentados: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Autor: ["", [Validators.required]],
      Fecha_Inicio: ["", [Validators.required]],
      Fecha_Fin: ["", [Validators.required]],
      Id_Apoyo_Socio_Economico: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ConvacatoriaModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["Ano"].setValue(data.Ano);
        this.GetDF["Semestre"].setValue(data.Semestre);
        this.GetDF["Total_Estudiantes_Presentados"].setValue(data.Total_Estudiantes_Presentados);
        this.GetDF["Autor"].setValue(data.Autor);
        this.GetDF["Fecha_Inicio"].setValue(data.Fecha_Inicio);
        this.GetDF["Fecha_Fin"].setValue(data.Fecha_Fin);
        this.GetDF["Id_Apoyo_Socio_Economico"].setValue(data.Id_Apoyo_Socio_Economico);
      }
    });
  }

  SaveRecord() {
    let model = new ConvacatoriaModel();
    model.id = this.GetDF["id"].value;
    model.Ano = Number(this.GetDF["Ano"].value);
    model.Semestre = Number(this.GetDF["Semestre"].value);
    model.Total_Estudiantes_Presentados = Number(this.GetDF["Total_Estudiantes_Presentados"].value);
    model.Autor = this.GetDF["Autor"].value;
    model.Fecha_Inicio = new Date(this.GetDF["Fecha_Inicio"].value);
    model.Fecha_Fin = new Date(this.GetDF["Fecha_Fin"].value);
    model.Id_Apoyo_Socio_Economico = Number(this.GetDF["Id_Apoyo_Socio_Economico"].value);

    this.service.EditRecord(model).subscribe({
      next: (data: ConvacatoriaModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["/parametros/listar-convacatoria"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
