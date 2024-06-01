import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ConvacatoriaModel } from 'src/app/models/parametros/convacatoria.model';
import { ConvacatoriasService } from 'src/app/services/parametros/convacatorias.service';

@Component({
  selector: 'app-listar-convacatoria',
  templateUrl: './listar-convacatoria.component.html',
  styleUrls: ['./listar-convacatoria.component.css']
})
export class ListarConvacatoriaComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  recordList: ConvacatoriaModel[] = []
  convocatorias: any;

  constructor(
    private service: ConvacatoriasService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ConvacatoriaModel[]) => {
        console.log(data)
        this.recordList = data;
      },
    });
  }

}
