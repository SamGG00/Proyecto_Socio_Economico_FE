import { Component, OnInit } from '@angular/core';
import { ApoyoSocioeconomicoModel } from 'src/app/models/parametros/apoyo-socioeconomico.model';
import { ApoyoSocioeconomicoService } from 'src/app/services/parametros/apoyo-socioeconomico.service';

@Component({
  selector: 'app-listar-apoyo-socioeconomico',
  templateUrl: './listar-apoyo-socioeconomico.component.html',
  styleUrls: ['./listar-apoyo-socioeconomico.component.css']
})
export class ListarApoyoSocioeconomicoComponent implements OnInit {
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
      },
    });
  }

}
