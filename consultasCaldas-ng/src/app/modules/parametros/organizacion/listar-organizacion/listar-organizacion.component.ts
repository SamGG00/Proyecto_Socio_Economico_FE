import { Component, OnInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { OrganizacionModel } from 'src/app/models/parametros/organizacion.modelo';
import { OrganizacionService } from 'src/app/services/parametros/organizacion.service';

@Component({
  selector: 'app-listar-organizacion',
  templateUrl: './listar-organizacion.component.html',
  styleUrls: ['./listar-organizacion.component.css']
})
export class ListarOrganizacionComponent implements OnInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
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
        this.recordList = data;
      },
    });
  }

}
