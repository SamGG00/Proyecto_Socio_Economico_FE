import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/parametros/principal.service';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import * as XLSX from 'xlsx';

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
  filter1: string = ""; // Filtro adicional 1
  filter2: string = ""; // Filtro adicional 2
  filter1Text: string = ""; // Texto de búsqueda para filtro 1
  filter2Text: string = ""; // Texto de búsqueda para filtro 2
  selectedColumn: string = 'nombrecompleto'; // Columna de filtro por defecto
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
  ]; // Lista de columnas para filtrar
  principalData: any[] = [];
  filteredRecordList: any[] = [];
  selectedXAxis: string = 'nombrecompleto';
  selectedYAxis: string = 'Edad';
  xLabel: string = 'nombrecompleto';
  yLabel: string = 'Edad';

  public xAxis: Object = { valueType: 'Category', title: this.xLabel };
  public yAxis: Object = { title: 'Value' };
  public chartTitle: string = 'Principal Data Chart';
  public legend: Object = { visible: true };
  public markerSettings: Object = { visible: true, dataLabel: { visible: true } };
  public tooltipSettings: Object = { enable: true };

  constructor(private principalService: PrincipalService) { }

  ngOnInit(): void {
    this.loadPrincipalData();
  }

  ngAfterViewInit() {
    // Inicializar el dropdown de Materialize CSS con un identificador único
    const dropdownElems = document.querySelectorAll('.dropdown-trigger.column-filter');
    M.Dropdown.init(dropdownElems, {});

    // Inicializar los dropdowns adicionales de filtro
    const filterElems = document.querySelectorAll('.dropdown-trigger.btn');
    M.Dropdown.init(filterElems, {});
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
        console.error('Error al obtener los datos principales', err);
      }
    });
  }

  getKeys(data: any): string[] {
    return data ? Object.keys(data) : [];
  }

  filterRecords() {
    this.filteredRecordList = this.principalData.filter(record => {
      const mainFilterValue = record[this.selectedColumn]?.toString().toLowerCase() || '';
      const filter1Value = record[this.filter1]?.toString().toLowerCase() || '';
      const filter2Value = record[this.filter2]?.toString().toLowerCase() || '';

      return mainFilterValue.includes(this.searchText.toLowerCase()) &&
             filter1Value.includes(this.filter1Text.toLowerCase()) &&
             filter2Value.includes(this.filter2Text.toLowerCase());
    });
  }

  onSearchTextChanged() {
    this.filterRecords();
  }

  onFilterTextChanged() {
    this.filterRecords();
  }

  onFilter1ColumnChanged(event: Event, column: string) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del anchor
    this.filter1 = column;
    this.filterRecords();
  }

  onFilter2ColumnChanged(event: Event, column: string) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del anchor
    this.filter2 = column;
    this.filterRecords();
  }

  onColumnChanged(event: Event, column: string) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del anchor
    this.selectedColumn = column;
    this.filterRecords();
  }

  onXAxisChanged(event: Event, column: string) {
    event.preventDefault();
    this.selectedXAxis = column;
    this.xLabel = column;
    this.updateAxisTypes();
    this.onAxisChange();
  }

  onYAxisChanged(event: Event, column: string) {
    event.preventDefault();
    this.selectedYAxis = column;
    this.yLabel = column;
    this.updateAxisTypes();
    this.onAxisChange();
  }

  onAxisChange() {
    // Trigger chart update by changing reference to dataSource and labels
    this.filteredRecordList = [...this.filteredRecordList];
    this.xAxis = { ...this.xAxis, title: this.xLabel };
    this.yAxis = { ...this.yAxis, title: this.yLabel };
  }

  updateAxisTypes() {
    // Update xAxis valueType based on the selected column type
    const isXAxisNumeric = !isNaN(this.filteredRecordList[0][this.selectedXAxis]);
    this.xAxis = {
      ...this.xAxis,
      valueType: isXAxisNumeric ? 'Double' : 'Category'
    };

    // Update yAxis valueType based on the selected column type
    const isYAxisNumeric = !isNaN(this.filteredRecordList[0][this.selectedYAxis]);
    this.yAxis = {
      ...this.yAxis,
      valueType: isYAxisNumeric ? 'Double' : 'Category'
    };
  }

  downloadTableData() {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.filteredRecordList);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'table_data');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {type: EXCEL_TYPE});
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION;
    link.click();
  }
}

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';