import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EstudianteModel } from 'src/app/models/parametros/estudiante.model';
import { EstudianteService } from 'src/app/services/parametros/estudiante.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  recordList: EstudianteModel[] = []
  convocatorias: any;

  constructor(
    private service: EstudianteService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: EstudianteModel[]) => {
        this.recordList = data;
      },
    });
  }

}
