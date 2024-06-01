import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      const dropdowns = document.querySelectorAll('.dropdown-trigger');
      M.Dropdown.init(dropdowns);
    });
  }

}
