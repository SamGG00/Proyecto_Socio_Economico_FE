import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ConfigurationData } from 'src/app/config/ConfigurationData';
import { MunicipioModel } from 'src/app/models/parametros/municipio.model';
import { MunicipioService } from 'src/app/services/parametros/municipio.service';

declare const M: any;

@Component({
  selector: 'app-listar-municipio',
  templateUrl: './listar-municipio.component.html',
  styleUrls: ['./listar-municipio.component.css']
})
export class ListarMunicipioComponent implements OnInit, AfterViewInit {
  p: number = 1;
  pageSize: number = ConfigurationData.PAGE_SIZE_PAGINATION;
  totalAmount: number = 0;
  searchText: string = "";
  selectedColumn: keyof MunicipioModel = "Nombre"; // Default filter column
  columns: (keyof MunicipioModel)[] = ["id", "Nombre"]; // List of columns to filter by
  recordList: MunicipioModel[] = [];
  filteredRecordList: MunicipioModel[] = [];
  selectedFile: File | null = null; // Add a property to hold the selected file
  uploadError: string = ''; // Add a property to hold the upload error message

  constructor(
    private service: MunicipioService
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
      next: (data: MunicipioModel[]) => {
        this.recordList = data;
        this.filterRecords();
        this.totalAmount = this.recordList.length;
      },
    });
  }

  filterRecords() {
    this.filteredRecordList = this.recordList.filter(record => {
      const valueToFilter = record[this.selectedColumn]?.toString().toLowerCase() || '';
      return valueToFilter.includes(this.searchText.toLowerCase());
    });
  }

  onSearchTextChanged() {
    this.filterRecords();
  }

  onColumnChanged(event: Event, column: keyof MunicipioModel) {
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
