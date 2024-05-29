import { Component, OnInit } from '@angular/core';
import { MunicipioModel } from 'src/app/models/parametros/municipio.model';
import { MunicipioService } from 'src/app/services/parametros/municipio.service';

@Component({
  selector: 'app-listar-municipio',
  templateUrl: './listar-municipio.component.html',
  styleUrls: ['./listar-municipio.component.css']
})
export class ListarMunicipioComponent implements OnInit {
  recordList: MunicipioModel[] = []
  convocatorias: any;

  constructor(
    private service: MunicipioService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: MunicipioModel[]) => {
        this.recordList = data;
      },
    });
  }

}
