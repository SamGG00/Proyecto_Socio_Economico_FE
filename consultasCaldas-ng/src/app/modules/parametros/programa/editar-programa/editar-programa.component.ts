import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProgramaModel } from 'src/app/models/parametros/programa.modelo';
import { ProgramaService } from 'src/app/services/parametros/programa.service';
declare const ShowGeneralMessage:any;
@Component({
  selector: 'app-editar-programa',
  templateUrl: './editar-programa.component.html',
  styleUrls: ['./editar-programa.component.css']
})
export class EditarProgramaComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProgramaService,
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
      Codigo_SNIES: ["", [Validators.required]],
      Duracion_Semestres: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Id_Facultad: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: ProgramaModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["Nombre"].setValue(data.Nombre);
        this.GetDF["Codigo_SNIES"].setValue(data.Codigo_SNIES);
        this.GetDF["Duracion_Semestres"].setValue(data.Duracion_Semestres);
        this.GetDF["Id_Facultad"].setValue(data.Id_Facultad);
      }
    });
  }

  SaveRecord() {
    let model = new ProgramaModel();
    model.id = this.GetDF["id"].value;
    model.Nombre = this.GetDF["Nombre"].value;
    model.Codigo_SNIES = this.GetDF["Codigo_SNIES"].value;
    model.Duracion_Semestres = Number(this.GetDF["Duracion_Semestres"].value);
    model.Id_Facultad = Number(this.GetDF["Id_Facultad"].value);

    this.service.EditRecord(model).subscribe({
      next: (data: ProgramaModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["/parametros/listar-programa"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
