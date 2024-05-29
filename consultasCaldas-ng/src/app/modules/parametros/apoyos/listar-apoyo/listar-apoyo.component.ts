import { Component, OnInit } from '@angular/core';
import { ApoyoModel } from 'src/app/models/parametros/apoyo.model';
import { ApoyosService } from 'src/app/services/parametros/apoyos.service';

@Component({
  selector: 'app-listar-apoyo',
  templateUrl: './listar-apoyo.component.html',
  styleUrls: ['./listar-apoyo.component.css']
})
export class ListarApoyoComponent implements OnInit {
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
