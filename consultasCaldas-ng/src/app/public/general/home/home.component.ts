import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PrincipalService } from 'src/app/services/parametros/principal.service';
import { EstudianteService } from 'src/app/services/parametros/estudiante.service';

declare const M: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  // General data
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
  ];
  principalData: any[] = [];
  filteredRecordList: any[] = [];
  selectedXAxis: string = 'PBM';
  selectedYAxis: string = 'Edad';
  xLabel: string = 'PBM';
  yLabel: string = 'Edad';

  public xAxis: Object = { valueType: 'Category', title: this.xLabel };
  public yAxis: Object = { title: this.yLabel };
  public chartTitle: string = 'Principal Data Chart';
  public legend: Object = { visible: true };
  public markerSettings: Object = { visible: true, dataLabel: { visible: true } };
  public tooltipSettings: Object = { enable: true };

  public barData?: Object[];
  public barTitle?: string;

  // Estudiantes data
  estudianteColumns: string[] = [
    "Codigo_Estudiante",
    "Nombre",
    "Genero",
    "Edad",
    "Tipo_Identificacion",
    "Numero_De_Identificacion",
    "PBM",
    "Correo",
    "Celular",
    "Estrato",
    "Promedio_Notas",
    "Puntaje_De_Apoyos",
    "Estado",
    "Ultimo_Semestre_Cursado",
    "Hijos",
    "Autor",
    "Retiros_Bajo_Rendimiento",
    "Sanciones_Disciplinarias",
    "Aspirante_Especial",
    "Semestre_Bajo_Rendimiento",
    "Semestre_Sancion",
    "Tipo_De_Aspirante",
    "Id_Municipio_Nacimiento",
    "Id_Municipio_Vivienda",
    "Id_Contacto",
    "Id_Programa_Academico",
    "Nombre_Programa_Academico",
    "Nombre_Contacto",
    "Nombre_Municipio_Vivienda",
    "Nombre_Municipio_Nacimiento"
  ];
  estudianteData: any[] = [];
  estudianteFilteredList: any[] = [];
  estudianteXAxis: string = 'PBM';
  estudianteYAxis: string = 'Edad';
  estudianteXLabel: string = 'PBM';
  estudianteYLabel: string = 'Edad';

  public estudianteXAxisObj: Object = { valueType: 'Category', title: this.estudianteXLabel };
  public estudianteYAxisObj: Object = { title: this.estudianteYLabel };
  public estudianteChartTitle: string = 'Estudiantes Data Chart';
  public estudianteBarTitle?: string;
  public estudianteBarData?: Object[];

  constructor(private principalService: PrincipalService, private estudianteService: EstudianteService) { }

  ngOnInit(): void {
    this.loadPrincipalData();
    this.loadEstudianteData();
  }

  ngAfterViewInit() {
    const dropdownElems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(dropdownElems, {});
  }

  loadPrincipalData() {
    this.principalService.GetPrincipalData().subscribe({
      next: (data) => {
        this.principalData = data;
        this.filteredRecordList = data;
        this.updateBarChart();
        this.filterRecords();
      },
      error: (err) => {
        console.error('Error al obtener los datos principales', err);
      }
    });
  }

  loadEstudianteData() {
    this.estudianteService.GetRecordList().subscribe({
      next: (data) => {
        this.estudianteData = data;
        this.estudianteFilteredList = data;
        this.updateEstudianteBarChart();
        this.filterEstudianteRecords();
      },
      error: (err) => {
        console.error('Error al obtener los datos de estudiantes', err);
      }
    });
  }

  filterRecords() {
    this.filteredRecordList = this.principalData;
  }

  filterEstudianteRecords() {
    this.estudianteFilteredList = this.estudianteData;
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

  onEstudianteXAxisChanged(event: Event, column: string) {
    event.preventDefault();
    this.estudianteXAxis = column;
    this.estudianteXLabel = column;
    this.onEstudianteAxisChange();
  }

  onEstudianteYAxisChanged(event: Event, column: string) {
    event.preventDefault();
    this.estudianteYAxis = column;
    this.estudianteYLabel = column;
    this.onEstudianteAxisChange();
  }

  onAxisChange() {
    // Trigger chart update by changing reference to dataSource and labels
    this.filteredRecordList = [...this.filteredRecordList];
    this.xAxis = { ...this.xAxis, title: this.xLabel };
    this.yAxis = { ...this.yAxis, title: this.yLabel };
    this.updateBarChart();
  }

  onEstudianteAxisChange() {
    // Trigger chart update by changing reference to dataSource and labels
    this.estudianteFilteredList = [...this.estudianteFilteredList];
    this.estudianteXAxisObj = { ...this.estudianteXAxisObj, title: this.estudianteXLabel };
    this.estudianteYAxisObj = { ...this.estudianteYAxisObj, title: this.estudianteYLabel };
    this.updateEstudianteBarChart();
  }

  updateBarChart() {
    this.barData = this.principalData.map(item => ({ x: item[this.selectedXAxis], y: item[this.selectedYAxis] }));
    this.barTitle = `Bar Chart - ${this.selectedXAxis} vs ${this.selectedYAxis}`;
  }

  updateEstudianteBarChart() {
    this.estudianteBarData = this.estudianteData.map(item => ({ x: item[this.estudianteXAxis], y: item[this.estudianteYAxis] }));
    this.estudianteBarTitle = `Estudiantes Bar Chart - ${this.estudianteXAxis} vs ${this.estudianteYAxis}`;
  }
}
