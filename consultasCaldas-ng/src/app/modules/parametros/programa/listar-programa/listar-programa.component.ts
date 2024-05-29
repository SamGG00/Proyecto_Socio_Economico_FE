import { Component, OnInit } from '@angular/core';
import { ProgramaModel } from 'src/app/models/parametros/programa.modelo';
import { ProgramaService } from 'src/app/services/parametros/programa.service';

@Component({
  selector: 'app-listar-programa',
  templateUrl: './listar-programa.component.html',
  styleUrls: ['./listar-programa.component.css']
})
export class ListarProgramaComponent implements OnInit {
  recordList: ProgramaModel[] = []
  convocatorias: any;

  constructor(
    private service: ProgramaService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ProgramaModel[]) => {
        this.recordList = data;
      },
    });
  }

}
