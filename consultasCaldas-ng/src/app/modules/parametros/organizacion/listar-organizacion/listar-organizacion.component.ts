import { Component, OnInit } from '@angular/core';
import { OrganizacionModel } from 'src/app/models/parametros/organizacion.modelo';
import { OrganizacionService } from 'src/app/services/parametros/organizacion.service';

@Component({
  selector: 'app-listar-organizacion',
  templateUrl: './listar-organizacion.component.html',
  styleUrls: ['./listar-organizacion.component.css']
})
export class ListarOrganizacionComponent implements OnInit {
  recordList: OrganizacionModel[] = []
  convocatorias: any;

  constructor(
    private service: OrganizacionService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ShowRecordList(){
    this.service.GetRecordList().subscribe({
      next: (data: OrganizacionModel[]) => {
        console.log(data);
        this.recordList = data;
      },
    });
  }

}
