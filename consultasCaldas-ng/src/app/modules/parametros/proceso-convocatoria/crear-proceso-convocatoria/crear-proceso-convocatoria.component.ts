import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProcesoConvocatoriaModel } from 'src/app/models/parametros/proceso-convocatoria.modelo';
import { ProcesoConvocatoriaService } from 'src/app/services/parametros/proceso-convocatoria.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-crear-proceso-convocatoria',
  templateUrl: './crear-proceso-convocatoria.component.html',
  styleUrls: ['./crear-proceso-convocatoria.component.css']
})
export class CrearProcesoConvocatoriaComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProcesoConvocatoriaService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      Aprobado: [false, Validators.required],
      Ano: ["", [Validators.required, Validators.pattern("^[0-9]{4}$")]],  // Year format
      Semestre: ["", [Validators.required, Validators.min(1), Validators.max(2)]], // Assuming 1 or 2 for semester
      Id_Convocatoria: [0, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new ProcesoConvocatoriaModel();
    model.Aprobado = this.GetDF["Aprobado"].value === 'true' || this.GetDF["Aprobado"].value === true;
    model.Ano = Number(this.GetDF["Ano"].value);
    model.Semestre = Number(this.GetDF["Semestre"].value);
    model.Id_Convocatoria = Number(this.GetDF["Id_Convocatoria"].value);

    this.service.SaveRecord(model).subscribe({
      next: (data: ProcesoConvocatoriaModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-proceso-convocatoria"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
