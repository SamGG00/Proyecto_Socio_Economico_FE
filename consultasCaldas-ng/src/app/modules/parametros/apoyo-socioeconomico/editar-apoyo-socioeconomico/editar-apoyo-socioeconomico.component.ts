import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoSocioeconomicoModel } from 'src/app/models/parametros/apoyo-socioeconomico.model';
import { ApoyoSocioeconomicoService } from 'src/app/services/parametros/apoyo-socioeconomico.service';
declare const ShowGeneralMessage:any;

@Component({
  selector: 'app-editar-apoyo-socioeconomico',
  templateUrl: './editar-apoyo-socioeconomico.component.html',
  styleUrls: ['./editar-apoyo-socioeconomico.component.css']
})
export class EditarApoyoSocioeconomicoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ApoyoSocioeconomicoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      Semestre: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Ano: ["", Validators.required],
      Estudiantes_Aprobados: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Sede_Apoyo: ["", [Validators.required]],
      Autor: ["", [Validators.required]],
      Id_Apoyo: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ApoyoSocioeconomicoModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["Semestre"].setValue(data.Semestre);
        this.GetDF["Ano"].setValue(data.Ano);
        this.GetDF["Estudiantes_Aprobados"].setValue(data.Estudiantes_Aprobados);
        this.GetDF["Sede_Apoyo"].setValue(data.Sede_Apoyo);
        this.GetDF["Autor"].setValue(data.Autor);
        this.GetDF["Id_Apoyo"].setValue(data.Id_Apoyo);
      }
    });
  }

  SaveRecord() {
    let model = new ApoyoSocioeconomicoModel();
    model.id = this.GetDF["id"].value;
    model.Semestre = Number(this.GetDF["Semestre"].value);
    model.Ano = new Date(this.GetDF["Ano"].value);
    model.Estudiantes_Aprobados = Number(this.GetDF["Estudiantes_Aprobados"].value);
    model.Sede_Apoyo = this.GetDF["Sede_Apoyo"].value;
    model.Autor = this.GetDF["Autor"].value;
    model.Id_Apoyo = Number(this.GetDF["Id_Apoyo"].value);

    this.service.EditRecord(model).subscribe({
      next: (data: ApoyoSocioeconomicoModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["/parametros/listar-apoyo-socioeconomico"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
