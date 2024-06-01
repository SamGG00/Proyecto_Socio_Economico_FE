import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ContactoModel } from 'src/app/models/parametros/contacto.model';
import { ContactoService } from 'src/app/services/parametros/contacto.service';

@Component({
  selector: 'app-listar-contacto',
  templateUrl: './listar-contacto.component.html',
  styleUrls: ['./listar-contacto.component.css']
})
export class ListarContactoComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  recordList: ContactoModel[] = []
  convocatorias: any;

  constructor(
    private service: ContactoService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: ContactoModel[]) => {
        this.recordList = data;
      },
    });
  }

}
