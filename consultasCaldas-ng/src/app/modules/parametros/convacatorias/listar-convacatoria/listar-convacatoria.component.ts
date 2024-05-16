import { Component, OnInit } from '@angular/core';
import { ConvacatoriaModel } from 'src/app/models/parametros/convacatoria.model';
import { ConvacatoriasService } from 'src/app/services/parametros/convacatorias.service';

@Component({
  selector: 'app-listar-convacatoria',
  templateUrl: './listar-convacatoria.component.html',
  styleUrls: ['./listar-convacatoria.component.css']
})
export class ListarConvacatoriaComponent implements OnInit {
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
        this.recordList = data;
      },
    });
  }

}
