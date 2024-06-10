import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EstudianteModel } from 'src/app/models/parametros/estudiante.model';
import { EstudianteService } from 'src/app/services/parametros/estudiante.service';
declare const ShowGeneralMessage:any;
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: EstudianteService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      Codigo_Estudiante: ["", [Validators.required]],
      Nombre: ["", [Validators.required]],
      Genero: ["", [Validators.required]],
      Edad: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Tipo_Identificacion: ["", [Validators.required]],
      Numero_De_Identificacion: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      PBM: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Correo: ["", [Validators.required, Validators.email]],
      Celular: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Estrato: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Promedio_Notas: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Puntaje_De_Apoyos: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Estado: ["", [Validators.required]],
      Ultimo_Semestre_Cursado: ["", [Validators.required]],
      Hijos: ["", [Validators.required]],
      Autor: ["", [Validators.required]],
      Retiros_Bajo_Rendimiento: ["", [Validators.required]],
      Sanciones_Disciplinarias: ["", [Validators.required]],
      Aspirante_Especial: ["", [Validators.required]],
      Semestre_Bajo_Rendimiento: ["", [Validators.required]],
      Semestre_Sancion: ["", [Validators.required]],
      Tipo_De_Aspirante: ["", [Validators.required]],
      Id_Municipio_Nacimiento: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Id_Municipio_Vivienda: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Id_Contacto: ["", [Validators.required, Validators.pattern("^[0-9]*$")]],
      Id_Programa_Academico: ["", [Validators.required, Validators.pattern("^[0-9]*$")]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: EstudianteModel) => {
        this.GetDF["Codigo_Estudiante"].setValue(data.Codigo_Estudiante);
        this.GetDF["Nombre"].setValue(data.Nombre);
        this.GetDF["Genero"].setValue(data.Genero);
        this.GetDF["Edad"].setValue(data.Edad);
        this.GetDF["Tipo_Identificacion"].setValue(data.Tipo_Identificacion);
        this.GetDF["Numero_De_Identificacion"].setValue(data.Numero_De_Identificacion);
        this.GetDF["PBM"].setValue(data.PBM);
        this.GetDF["Correo"].setValue(data.Correo);
        this.GetDF["Celular"].setValue(data.Celular);
        this.GetDF["Estrato"].setValue(data.Estrato);
        this.GetDF["Promedio_Notas"].setValue(data.Promedio_Notas);
        this.GetDF["Puntaje_De_Apoyos"].setValue(data.Puntaje_De_Apoyos);
        this.GetDF["Estado"].setValue(data.Estado);
        this.GetDF["Ultimo_Semestre_Cursado"].setValue(data.Ultimo_Semestre_Cursado);
        this.GetDF["Hijos"].setValue(data.Hijos);
        this.GetDF["Autor"].setValue(data.Autor);
        this.GetDF["Retiros_Bajo_Rendimiento"].setValue(data.Retiros_Bajo_Rendimiento);
        this.GetDF["Sanciones_Disciplinarias"].setValue(data.Sanciones_Disciplinarias);
        this.GetDF["Aspirante_Especial"].setValue(data.Aspirante_Especial);
        this.GetDF["Semestre_Bajo_Rendimiento"].setValue(data.Semestre_Bajo_Rendimiento);
        this.GetDF["Semestre_Sancion"].setValue(data.Semestre_Sancion);
        this.GetDF["Tipo_De_Aspirante"].setValue(data.Tipo_De_Aspirante);
        this.GetDF["Id_Municipio_Nacimiento"].setValue(data.Id_Municipio_Nacimiento);
        this.GetDF["Id_Municipio_Vivienda"].setValue(data.Id_Municipio_Vivienda);
        this.GetDF["Id_Contacto"].setValue(data.Id_Contacto);
        this.GetDF["Id_Programa_Academico"].setValue(data.Id_Programa_Academico);
      }
    });
  }

  SaveRecord() {
    let model = new EstudianteModel();
    model.Codigo_Estudiante = this.GetDF["Codigo_Estudiante"].value;
    model.Nombre = this.GetDF["Nombre"].value;
    model.Genero = this.GetDF["Genero"].value;
    model.Edad = Number(this.GetDF["Edad"].value);
    model.Tipo_Identificacion = this.GetDF["Tipo_Identificacion"].value;
    model.Numero_De_Identificacion = this.GetDF["Numero_De_Identificacion"].value;
    model.PBM = Number(this.GetDF["PBM"].value);
    model.Correo = this.GetDF["Correo"].value;
    model.Celular = this.GetDF["Celular"].value;
    model.Estrato = Number(this.GetDF["Estrato"].value);
    model.Promedio_Notas = Number(this.GetDF["Promedio_Notas"].value);
    model.Puntaje_De_Apoyos = Number(this.GetDF["Puntaje_De_Apoyos"].value);
    model.Estado = this.GetDF["Estado"].value;
    model.Ultimo_Semestre_Cursado = this.GetDF["Ultimo_Semestre_Cursado"].value;
    model.Hijos = this.GetDF["Hijos"].value === 'true' || this.GetDF["Hijos"].value === true;
    model.Autor = this.GetDF["Autor"].value;
    model.Retiros_Bajo_Rendimiento = this.GetDF["Retiros_Bajo_Rendimiento"].value === 'true' || this.GetDF["Retiros_Bajo_Rendimiento"].value === true;
    model.Sanciones_Disciplinarias = this.GetDF["Sanciones_Disciplinarias"].value === 'true' || this.GetDF["Sanciones_Disciplinarias"].value === true;
    model.Aspirante_Especial = this.GetDF["Aspirante_Especial"].value === 'true' || this.GetDF["Aspirante_Especial"].value === true;
    model.Semestre_Bajo_Rendimiento = this.GetDF["Semestre_Bajo_Rendimiento"].value;
    model.Semestre_Sancion = this.GetDF["Semestre_Sancion"].value;
    model.Tipo_De_Aspirante = this.GetDF["Tipo_De_Aspirante"].value;
    model.Id_Municipio_Nacimiento = Number(this.GetDF["Id_Municipio_Nacimiento"].value);
    model.Id_Municipio_Vivienda = Number(this.GetDF["Id_Municipio_Vivienda"].value);
    model.Id_Contacto = Number(this.GetDF["Id_Contacto"].value);
    model.Id_Programa_Academico = Number(this.GetDF["Id_Programa_Academico"].value);

    this.service.EditRecord(model).subscribe({
      next: (data: EstudianteModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["/parametros/listar"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
