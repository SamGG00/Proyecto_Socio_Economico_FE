import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoSocioeconomicoModel } from 'src/app/models/parametros/apoyo-socioeconomico.model';
import { ApoyoSocioeconomicoService } from 'src/app/services/parametros/apoyo-socioeconomico.service';

@Component({
  selector: 'app-listar-apoyo-socioeconomico',
  templateUrl: './listar-apoyo-socioeconomico.component.html',
  styleUrls: ['./listar-apoyo-socioeconomico.component.css']
})
export class ListarApoyoSocioeconomicoComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  recordList: ApoyoSocioeconomicoModel[] = []
  convocatorias: any;

  constructor(
    private service: ApoyoSocioeconomicoService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ApoyoSocioeconomicoModel[]) => {
        this.recordList = data;
        this.totalAmount = this.recordList.length;
      },
    });
  }

}
