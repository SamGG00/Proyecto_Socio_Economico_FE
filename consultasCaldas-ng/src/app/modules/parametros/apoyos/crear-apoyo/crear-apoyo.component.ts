import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoModel } from 'src/app/models/parametros/apoyo.model';
import { ApoyosService } from 'src/app/services/parametros/apoyos.service';

@Component({
  selector: 'app-crear-apoyo',
  templateUrl: './crear-apoyo.component.html',
  styleUrls: ['./crear-apoyo.component.css']
})
export class CrearApoyoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ApoyosService
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      Nombre: ["", [Validators.required]],
      Interno: [false, Validators.required], 
      Id_Organizacion: [0, [Validators.required, Validators.pattern("^[0-9]*$")]] 
    })
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SaveRecord(){
    let model = new ApoyoModel();
    model.Nombre = this.GetDF["Nombre"].value
    model.Interno = this.GetDF["Interno"].value === 'true' || this.GetDF["Interno"].value === true;
    model.Id_Organizacion = Number(this.GetDF["Id_Organizacion"].value);
    this.service.SaveRecord(model).subscribe({
      next: (data: ApoyoModel) => {
        //ShowGeneralMessage(ConfigurationData.SAVED_MESSAGE)
        this.router.navigate(["/parametros/listar-apoyo"])
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
