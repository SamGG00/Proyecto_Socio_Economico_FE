import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EstudianteModel } from 'src/app/models/parametros/estudiante.model';
import { EstudianteService } from 'src/app/services/parametros/estudiante.service';

declare const M: any;

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit, AfterViewInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  searchText: string = "";
  selectedColumn: string = "Nombre"; // Default filter column
  columns: string[] = ["Codigo_Estudiante", "Nombre", "Genero", "Edad", "Tipo_Identificacion", "Numero_De_Identificacion", "PBM", "Correo", "Celular", "Estrato", "Promedio_Notas", "Puntaje_De_Apoyos", "Estado", "Ultimo_Semestre_Cursado", "Hijos", "Autor", "Retiros_Bajo_Rendimiento", "Sanciones_Disciplinarias", "Aspirante_Especial", "Semestre_Bajo_Rendimiento", "Semestre_Sancion", "Tipo_De_Aspirante", "Id_Municipio_Nacimiento", "Id_Municipio_Vivienda", "Id_Contacto", "Id_Programa_Academico"]; // List of columns to filter by
  recordList: EstudianteModel[] = [];
  filteredRecordList: EstudianteModel[] = [];

  constructor(
    private service: EstudianteService
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
      next: (data: EstudianteModel[]) => {
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
