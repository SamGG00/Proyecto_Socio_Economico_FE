import { Component, OnInit } from '@angular/core';
import { ContactoModel } from 'src/app/models/parametros/contacto.model';
import { ContactoService } from 'src/app/services/parametros/contacto.service';

@Component({
  selector: 'app-listar-contacto',
  templateUrl: './listar-contacto.component.html',
  styleUrls: ['./listar-contacto.component.css']
})
export class ListarContactoComponent implements OnInit {
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
