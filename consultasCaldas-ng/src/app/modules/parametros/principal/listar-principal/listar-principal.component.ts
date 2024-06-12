import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/parametros/principal.service';
import { ConfigurationData } from 'src/app/config/ConfigurationData';

declare const M: any;

@Component({
  selector: 'app-listar-principal',
  templateUrl: './listar-principal.component.html',
  styleUrls: ['./listar-principal.component.css']
})
export class ListarPrincipalComponent implements OnInit, AfterViewInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  searchText: string = "";
  selectedColumn: string = 'nombrecompleto'; // Default filter column
  columns: string[] = [
    "nombrecompleto",
    "sexo",
    "Edad",
    "municipioprocedencia",
    "Tipo_Identificacion",
    "Numero_De_Identificacion",
    "Codigo_Estudiante",
    "Correo_Electronico_Estudiante",
    "Numero_Contacto_Estudiante",
    "PBM",
    "Programa_Actual",
    "Promedio_Notas",
    "Duracion_programa",
    "retirosbajorendimiento",
    "periodoretiro",
    "sancionesdisciplinarias",
    "semestresancion",
    "Codigo_SNIES",
    "beneficiosies",
    "semestre",
    "Ultimo_Semestre_Cursado",
    "municipioResidencia",
    "aspiranteespecial",
    "Estado",
    "personasacargo",
    "Estrato",
    "contactonombre",
    "contactoparentesco",
    "contactonumero",
    "contactoprocedencia",
    "contactocorreo"
  ]; // List of columns to filter by
  principalData: any[] = [];
  filteredRecordList: any[] = [];

  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.loadPrincipalData();
  }

  ngAfterViewInit() {
    // Initialize the Materialize CSS dropdown with a unique identifier
    const dropdownElems = document.querySelectorAll('.dropdown-trigger.column-filter');
    M.Dropdown.init(dropdownElems, {});
  }

  loadPrincipalData() {
    this.principalService.GetPrincipalData().subscribe({
      next: (data) => {
        this.principalData = data;
        this.filteredRecordList = data;
        this.totalAmount = this.principalData.length;
        this.filterRecords();
      },
      error: (err) => {
        console.error('Error fetching principal data', err);
      }
    });
  }

  getKeys(data: any): string[] {
    return data ? Object.keys(data) : [];
  }

  filterRecords() {
    this.filteredRecordList = this.principalData.filter(record => {
      const valueToFilter = record[this.selectedColumn]?.toString().toLowerCase() || '';
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
