import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApoyoSocioeconomicoModel } from 'src/app/models/parametros/apoyo-socioeconomico.model';
import { ApoyoSocioeconomicoService } from 'src/app/services/parametros/apoyo-socioeconomico.service';

@Component({
  selector: 'app-crear-apoyo-socioeconomico',
  templateUrl: './crear-apoyo-socioeconomico.component.html',
  styleUrls: ['./crear-apoyo-socioeconomico.component.css']
})
export class CrearApoyoSocioeconomicoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ApoyoSocioeconomicoService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      Semestre: [0, [Validators.required, Validators.min(1), Validators.max(12)]],
      Ano: ["", [Validators.required]],
      Estudiantes_Aprobados: [0, [Validators.required, Validators.min(1)]],
      Sede_Apoyo: ["", [Validators.required]],
      Autor: ["", [Validators.required]],
      Id_Apoyo: [0, [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new ApoyoSocioeconomicoModel();
    model.Semestre = Number(this.GetDF["Semestre"].value);
    model.Ano = new Date(this.GetDF["Ano"].value);
    model.Estudiantes_Aprobados = Number(this.GetDF["Estudiantes_Aprobados"].value);
    model.Sede_Apoyo = this.GetDF["Sede_Apoyo"].value;
    model.Autor = this.GetDF["Autor"].value;
    model.Id_Apoyo = Number(this.GetDF["Id_Apoyo"].value);

    this.service.SaveRecord(model).subscribe({
      next: (data: ApoyoSocioeconomicoModel) => {
        // ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parametros/listar-apoyo-socioeconomico"])
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
