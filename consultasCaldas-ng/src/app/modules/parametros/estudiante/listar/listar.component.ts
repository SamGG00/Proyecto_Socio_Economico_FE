import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  dataFrom: FormGroup = new FormGroup({});

  constructor(
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  
  }

  FormBuilding(){
    this.dataFrom = this.fb.group({
      
    })
  }

}
