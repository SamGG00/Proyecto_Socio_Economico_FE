import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ProgramaModel } from 'src/app/models/parametros/programa.modelo';
import { ProgramaService } from 'src/app/services/parametros/programa.service';

@Component({
  selector: 'app-listar-programa',
  templateUrl: './listar-programa.component.html',
  styleUrls: ['./listar-programa.component.css']
})
export class ListarProgramaComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
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
