import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoModel } from 'src/app/models/parametros/apoyo.model';
import { ApoyosService } from 'src/app/services/parametros/apoyos.service';

@Component({
  selector: 'app-listar-apoyo',
  templateUrl: './listar-apoyo.component.html',
  styleUrls: ['./listar-apoyo.component.css']
})
export class ListarApoyoComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;

  recordList: ApoyoModel[] = []
  convocatorias: any;

  constructor(
    private service: ApoyosService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ApoyoModel[]) => {
        this.recordList = data;
      },
    });
  }

}
