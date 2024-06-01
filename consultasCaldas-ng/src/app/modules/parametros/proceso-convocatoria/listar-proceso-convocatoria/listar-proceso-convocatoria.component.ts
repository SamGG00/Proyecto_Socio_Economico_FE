import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProcesoConvocatoriaModel } from 'src/app/models/parametros/proceso-convocatoria.modelo';
import { ProcesoConvocatoriaService } from 'src/app/services/parametros/proceso-convocatoria.service';

@Component({
  selector: 'app-listar-proceso-convocatoria',
  templateUrl: './listar-proceso-convocatoria.component.html',
  styleUrls: ['./listar-proceso-convocatoria.component.css']
})
export class ListarProcesoConvocatoriaComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  recordList: ProcesoConvocatoriaModel[] = []
  convocatorias: any;

  constructor(
    private service: ProcesoConvocatoriaService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ProcesoConvocatoriaModel[]) => {
        this.recordList = data;
      },
    });
  }

}
