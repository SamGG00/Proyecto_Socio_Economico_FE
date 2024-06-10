import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { MunicipioModel } from 'src/app/models/parametros/municipio.model';
import { MunicipioService } from 'src/app/services/parametros/municipio.service';
declare const ShowGeneralMessage:any;
@Component({
  selector: 'app-editar-municipio',
  templateUrl: './editar-municipio.component.html',
  styleUrls: ['./editar-municipio.component.css']
})
export class EditarMunicipioComponent implements OnInit {

  dataForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: MunicipioService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.FormBuilding();
    this.SearchRecord();
  }

  FormBuilding() {
    this.dataForm = this.fb.group({
      id: ["", [Validators.required]],
      Nombre: ["", [Validators.required]]
    });
  }

  get GetDF() {
    return this.dataForm.controls;
  }

  SearchRecord() {
    let id = this.route.snapshot.params["id"];
    this.service.SearchRecord(id).subscribe({
      next: (data: MunicipioModel) => {
        this.GetDF["id"].setValue(data.id);
        this.GetDF["Nombre"].setValue(data.Nombre);
      }
    });
  }

  SaveRecord() {
    let model = new MunicipioModel();
    model.id = this.GetDF["id"].value;
    model.Nombre = this.GetDF["Nombre"].value;

    this.service.EditRecord(model).subscribe({
      next: (data: MunicipioModel) => {
        ShowGeneralMessage(ConfigurationData.UPDATED_MESSAGE);
        this.router.navigate(["/parametros/listar-municipio"]);
      },
      error: (err) => {
        ShowGeneralMessage(ConfigurationData.INVALID_FORM_MESSAGE);
        console.error(err);
      }
    });
  }

}
