import { Component, OnInit } from '@angular/core';
import { ProcesoConvocatoriaModel } from 'src/app/models/parametros/proceso-convocatoria.modelo';
import { ProcesoConvocatoriaService } from 'src/app/services/parametros/proceso-convocatoria.service';

@Component({
  selector: 'app-listar-proceso-convocatoria',
  templateUrl: './listar-proceso-convocatoria.component.html',
  styleUrls: ['./listar-proceso-convocatoria.component.css']
})
export class ListarProcesoConvocatoriaComponent implements OnInit {
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
