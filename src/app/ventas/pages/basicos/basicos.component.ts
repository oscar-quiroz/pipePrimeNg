import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  nombreUpper: string = 'Oscar QUiroz';
  nombreLower: string = 'Oscar QUiroz';
  nombreTitle: string = 'Oscar QUiroz';

  fecha: Date = new Date(); // fecha de hoy

  constructor() {}

  ngOnInit(): void {}
}
