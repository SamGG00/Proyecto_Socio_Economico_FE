import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoSocioeconomicoModel } from 'src/app/models/parametros/apoyo-socioeconomico.model';
import { ApoyoSocioeconomicoService } from 'src/app/services/parametros/apoyo-socioeconomico.service';

declare const M: any;

@Component({
  selector: 'app-listar-apoyo-socioeconomico',
  templateUrl: './listar-apoyo-socioeconomico.component.html',
  styleUrls: ['./listar-apoyo-socioeconomico.component.css']
})
export class ListarApoyoSocioeconomicoComponent implements OnInit, AfterViewInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  searchText: string = "";
  selectedColumn: string = "Semestre"; // Default filter column
  columns: string[] = ["id", "Semestre", "Ano", "Estudiantes_Aprobados", "Sede_Apoyo", "Autor", "Id_Apoyo"]; // List of columns to filter by
  recordList: ApoyoSocioeconomicoModel[] = [];
  filteredRecordList: ApoyoSocioeconomicoModel[] = [];

  constructor(
    private service: ApoyoSocioeconomicoService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
  }

  ngAfterViewInit() {
    // Initialize the Materialize CSS dropdown with a unique identifier
    const dropdownElems = document.querySelectorAll('.dropdown-trigger.column-filter');
    M.Dropdown.init(dropdownElems, {});
  }

  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: ApoyoSocioeconomicoModel[]) => {
        this.recordList = data;
        this.filterRecords();
        this.totalAmount = this.recordList.length;
      },
    });
  }

  filterRecords() {
    this.filteredRecordList = this.recordList.filter(record => {
      const valueToFilter = (record as any)[this.selectedColumn]?.toString().toLowerCase() || '';
      return valueToFilter.includes(this.searchText.toLowerCase());
    });
  }

  onSearchTextChanged() {
    this.filterRecords();
  }

  onColumnChanged(event: Event, column: string) {
    event.preventDefault(); // Prevent the default anchor tag behavior
    this.selectedColumn = column;
    this.filterRecords();
  }
}
