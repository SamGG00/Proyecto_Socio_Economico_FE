import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoModel } from 'src/app/models/parametros/apoyo.model';
import { ApoyosService } from 'src/app/services/parametros/apoyos.service';
declare const ShowGeneralMessage:any;
@Component({
  selector: 'app-editar-apoyo',
  templateUrl: './editar-apoyo.component.html',
  styleUrls: ['./editar-apoyo.component.css']
})
export class EditarApoyoComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ApoyosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding(){
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      Nombre: ["", [Validators.required]],
      Interno: ["", Validators.required], 
      Id_Organizacion: ["", [Validators.required, Validators.pattern("^[1-9]*$")]] 
    })
  }

  get GetDF() {
    return this.dataForm.controls;
  }
  
  SearchRecord() {
    let id = this.route.snapshot.params["id"]
    this.service.SearchRecord(id).subscribe({
      next: (data: ApoyoModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["Nombre"].setValue(data.Nombre);
        this.GetDF["Interno"].setValue(data.Interno);
        this.GetDF["Id_Organizacion"].setValue(data.Id_Organizacion);
      }
    })
  }

  SaveRecord(){
    let model = new ApoyoModel();
    model.id = this.GetDF["id"].value
    model.Nombre = this.GetDF["Nombre"].value
    model.Interno = this.GetDF["Interno"].value === 'true' || this.GetDF["Interno"].value === true;
    model.Id_Organizacion = Number(this.GetDF["Id_Organizacion"].value);
    this.service.EditRecord(model).subscribe({
      next: (data: ApoyoModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE)
        this.router.navigate(["/parametros/listar-apoyo"])
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE)
        console.error(err);
      }
    })
  }


}
