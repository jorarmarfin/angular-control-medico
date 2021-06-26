import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public Menu = [
    { name: 'Miembros', link:'miembros' },
    { name: 'Graficos', link:'graficos' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
