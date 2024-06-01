import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { MunicipioModel } from 'src/app/models/parametros/municipio.model';
import { MunicipioService } from 'src/app/services/parametros/municipio.service';

@Component({
  selector: 'app-listar-municipio',
  templateUrl: './listar-municipio.component.html',
  styleUrls: ['./listar-municipio.component.css']
})
export class ListarMunicipioComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
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
