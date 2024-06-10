import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EstudianteModel } from 'src/app/models/parametros/estudiante.model';
import { EstudianteService } from 'src/app/services/parametros/estudiante.service';
declare const ShowGeneralMessage: any;
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EstudianteService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      Codigo_Estudiante: ["", [Validators.required]],
      Nombre: ["", [Validators.required]],
      Genero: ["", [Validators.required]],
      Edad: [0, [Validators.required, Validators.min(1)]],
      Numero_De_Identificacion: ["", [Validators.required]],
      PBM: [0, [Validators.required, Validators.min(0)]],
      Correo: ["", [Validators.required, Validators.email]],
      Celular: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Estrato: [0, [Validators.required, Validators.min(0)]],
      Promedio_Notas: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      Puntaje_De_Apoyos: [0, [Validators.required, Validators.min(0)]],
      Estado: ["", [Validators.required]],
      Ultimo_Semestre_Cursado: ["", [Validators.required]],
      Hijos: [false, Validators.required],
      Id_Municipio_Nacimiento: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      Id_Municipio_Vivienda: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      Id_Contacto: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      Id_Programa_Academico: [0, [Validators.required, Validators.pattern("^[0-9]*$")]],
      Retiros_Bajo_Rendimiento: [""],
      Semestre_Bajo_Rendimiento: [""],
      Sanciones_Disciplinarias: [0, [Validators.required, Validators.min(0)]],
      Semetre_Sancion: [""],
      Aspirante_Especial: [false, Validators.required],
      Tipo_Identificacion: [""],
      Tipo_De_Aspirante: [""],
      Autor: ["", [Validators.required]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord() {
    let model = new EstudianteModel();
    model.Codigo_Estudiante = this.GetDF["Codigo_Estudiante"].value;
    model.Nombre = this.GetDF["Nombre"].value;
    model.Genero = this.GetDF["Genero"].value;
    model.Edad = Number(this.GetDF["Edad"].value);
    model.Numero_De_Identificacion = this.GetDF["Numero_De_Identificacion"].value;
    model.PBM = Number(this.GetDF["PBM"].value);
    model.Correo = this.GetDF["Correo"].value;
    model.Celular = this.GetDF["Celular"].value;
    model.Estrato = Number(this.GetDF["Estrato"].value);
    model.Promedio_Notas = Number(this.GetDF["Promedio_Notas"].value);
    model.Puntaje_De_Apoyos = Number(this.GetDF["Puntaje_De_Apoyos"].value);
    model.Estado = this.GetDF["Estado"].value;
    model.Ultimo_Semestre_Cursado = (this.GetDF["Ultimo_Semestre_Cursado"].value);
    model.Hijos = this.GetDF["Hijos"].value === 'true' || this.GetDF["Hijos"].value === true;
    model.Id_Municipio_Nacimiento = Number(this.GetDF["Id_Municipio_Nacimiento"].value);
    model.Id_Municipio_Vivienda = Number(this.GetDF["Id_Municipio_Vivienda"].value);
    model.Id_Contacto = Number(this.GetDF["Id_Contacto"].value);
    model.Id_Programa_Academico = Number(this.GetDF["Id_Programa_Academico"].value);
    model.Retiros_Bajo_Rendimiento = this.GetDF["Retiros_Bajo_Rendimiento"].value;
    model.Semestre_Bajo_Rendimiento = this.GetDF["Semestre_Bajo_Rendimiento"].value;
    model.Sanciones_Disciplinarias = Number(this.GetDF["Sanciones_Disciplinarias"].value);
    model.Semetre_Sancion = this.GetDF["Semetre_Sancion"].value;
    model.Aspirante_Especial = this.GetDF["Aspirante_Especial"].value === 'true' || this.GetDF["Aspirante_Especial"].value === true;
    model.Tipo_Identificacion = this.GetDF["Tipo_Identificacion"].value;
    model.Tipo_De_Aspirante = this.GetDF["Tipo_De_Aspirante"].value;
    model.Autor = this.GetDF["Autor"].value;

    this.service.SaveRecord(model).subscribe({
      next: (data: EstudianteModel) => {
        ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE);
        this.router.navigate(["/parametros/listar-estudiante"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
