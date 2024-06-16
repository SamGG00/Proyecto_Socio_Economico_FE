import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { ApoyoModel } from 'src/app/models/parametros/apoyo.model';
import { ApoyosService } from 'src/app/services/parametros/apoyos.service';
import { PrincipalService } from 'src/app/services/parametros/principal.service';

declare const M: any;

@Component({
  selector: 'app-listar-apoyo',
  templateUrl: './listar-apoyo.component.html',
  styleUrls: ['./listar-apoyo.component.css']
})
export class ListarApoyoComponent implements OnInit, AfterViewInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  searchText: string = "";
  selectedColumn: string = "Nombre"; // Default filter column
  columns: string[] = ["id", "Nombre", "Interno", "Id_Organizacion", "Nombre_Organizacion"]; // List of columns to filter by
  recordList: ApoyoModel[] = [];
  filteredRecordList: ApoyoModel[] = [];
  selectedFile: File | null = null; // Add a property to hold the selected file
  uploadError: string = ''; // Add a property to hold the upload error message

  constructor(
    private service: ApoyosService,
    private principalService: PrincipalService
  ) { }

  ngOnInit(): void {
    this.ShowRecordList();
    this.loadApoyosWithOrganizacionNames();
  }

  ngAfterViewInit() {
    // Initialize the Materialize CSS dropdown with a unique identifier
    const dropdownElems = document.querySelectorAll('.dropdown-trigger.column-filter');
    M.Dropdown.init(dropdownElems, {});
  }

  loadApoyosWithOrganizacionNames() {
    this.principalService.GetApoyosWithOrganizacionNames().subscribe({
      next: (data) => {
        this.recordList = data;
        this.filteredRecordList = data;
        this.totalAmount = this.recordList.length;
        this.filterRecords();
      },
      error: (err) => {
        console.error('Error fetching apoyos with organizacion names', err);
      }
    });
  }

  ShowRecordList() {
    this.service.GetRecordList().subscribe({
      next: (data: ApoyoModel[]) => {
        this.recordList = data;
        this.filterRecords();
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
          console.log('Archivo subido excitosamente', response);
          this.ShowRecordList(); // Refresh the list after upload
        },
        error: (err) => {
          console.error('Error cargando archivo', err);
          this.uploadError = 'Error subiendo archivo. Asegurate que es el formato correcto.';
        }
      });
    } else {
      this.uploadError = 'Agregue un archivo de apoyo para subir.';
    }
  }
}
