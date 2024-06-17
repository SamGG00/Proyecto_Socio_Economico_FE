import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { EstudianteModel } from 'src/app/models/parametros/estudiante.model';
import { EstudianteService } from 'src/app/services/parametros/estudiante.service';
import { PrincipalService } from 'src/app/services/parametros/principal.service';

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
  columns: string[] = ["Codigo_Estudiante", "Nombre", "Genero", "Edad", "Tipo_Identificacion", "Numero_De_Identificacion", "PBM", "Correo", "Celular", "Estrato", "Promedio_Notas", "Puntaje_De_Apoyos", "Estado", "Ultimo_Semestre_Cursado", "Hijos", "Autor", "Retiros_Bajo_Rendimiento", "Sanciones_Disciplinarias", "Aspirante_Especial", "Semestre_Bajo_Rendimiento", "Semestre_Sancion", "Tipo_De_Aspirante", "Id_Municipio_Nacimiento", "Id_Municipio_Vivienda", "Id_Contacto", "Id_Programa_Academico", "Nombre_Programa_Academico", "Nombre_Contacto", "Nombre_Municipio_Vivienda", "Nombre_Municipio_Nacimiento"]; // List of columns to filter by
  recordList: EstudianteModel[] = [];
  filteredRecordList: EstudianteModel[] = [];
  selectedFile: File | null = null; // Add a property to hold the selected file
  uploadError: string = ''; // Add a property to hold the upload error message

  // Chart properties
  selectedXAxis: string = 'Nombre';
  selectedYAxis: string = 'Edad';
  xLabel: string = 'Nombre';
  yLabel: string = 'Edad';
  public xAxis: Object = { valueType: 'Category', title: this.xLabel };
  public yAxis: Object = { title: this.yLabel };
  public chartTitle: string = 'Estudiantes Data Chart';
  public legend: Object = { visible: true };
  public markerSettings: Object = { visible: true, dataLabel: { visible: true } };
  public tooltipSettings: Object = { enable: true };

  constructor(
    private service: EstudianteService,
    private principalService: PrincipalService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
    this.loadEstudiantesWithDetails();
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

  loadEstudiantesWithDetails() {
    this.principalService.GetEstudiantesWithDetails().subscribe({
      next: (data) => {
        this.recordList = data;
        this.filteredRecordList = data;
        this.totalAmount = this.recordList.length;
        this.filterRecords();
      },
      error: (err) => {
        console.error('Error fetching estudiantes with details', err);
      }
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

  onXAxisChanged(event: Event, column: string) {
    event.preventDefault();
    this.selectedXAxis = column;
    this.xLabel = column;
    this.onAxisChange();
  }

  onYAxisChanged(event: Event, column: string) {
    event.preventDefault();
    this.selectedYAxis = column;
    this.yLabel = column;
    this.onAxisChange();
  }

  onAxisChange() {
    // Trigger chart update by changing reference to dataSource and labels
    this.filteredRecordList = [...this.filteredRecordList];
    this.xAxis = { ...this.xAxis, title: this.xLabel };
    this.yAxis = { ...this.yAxis, title: this.yLabel };
  }

  // Method to handle file selection
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  // Method to upload the selected file
  onUpload() {
    if (this.selectedFile) {
      this.uploadError = ''; // Reset the error message
      this.service.uploadExcel(this.selectedFile).subscribe({
        next: (response) => {
          console.log('File uploaded successfully', response);
          this.ShowRecordList(); // Refresh the list after upload
        },
        error: (err) => {
          console.error('Error uploading file', err);
          this.uploadError = 'Error uploading file. Please ensure it is the correct format.';
        }
      });
    } else {
      this.uploadError = 'Please select a file to upload.';
    }
  }
}
