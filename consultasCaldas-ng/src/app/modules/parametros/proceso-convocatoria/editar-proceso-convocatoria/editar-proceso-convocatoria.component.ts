import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProcesoConvocatoriaModel } from 'src/app/models/parametros/proceso-convocatoria.modelo';
import { ProcesoConvocatoriaService } from 'src/app/services/parametros/proceso-convocatoria.service';
declare const ShowGeneralMessage:any;
@Component({
  selector: 'app-editar-proceso-convocatoria',
  templateUrl: './editar-proceso-convocatoria.component.html',
  styleUrls: ['./editar-proceso-convocatoria.component.css']
})
export class EditarProcesoConvocatoriaComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProcesoConvocatoriaService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      Aprobado: ["", [Validators.required]],
      Ano: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Semestre: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Id_Convocatoria: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ProcesoConvocatoriaModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["Aprobado"].setValue(data.Aprobado);
        this.GetDF["Ano"].setValue(data.Ano);
        this.GetDF["Semestre"].setValue(data.Semestre);
        this.GetDF["Id_Convocatoria"].setValue(data.Id_Convocatoria);
      }
    });
  }

  SaveRecord() {
    let model = new ProcesoConvocatoriaModel();
    model.id = this.GetDF["id"].value;
    model.Aprobado = this.GetDF["Aprobado"].value === 'true' || this.GetDF["Aprobado"].value === true;
    model.Ano = Number(this.GetDF["Ano"].value);
    model.Semestre = Number(this.GetDF["Semestre"].value);
    model.Id_Convocatoria = Number(this.GetDF["Id_Convocatoria"].value);

    this.service.EditRecord(model).subscribe({
      next: (data: ProcesoConvocatoriaModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["/parametros/listar-proceso-convocatoria"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
