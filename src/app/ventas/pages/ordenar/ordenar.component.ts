import { Component, OnInit } from '@angular/core';
import { Color, Heore } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  texto: string = 'nosotros';
  enMayuscula: boolean = true;
  orden: string = 'sin valor';

  heroes: Heore[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'DaredDevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    },
  ];

  heroes2: Heore[] = [];

  constructor() {
    this.heroes2 = [...this.heroes];
  }

  ngOnInit(): void {}

  change() {
    if (this.enMayuscula) {
      this.enMayuscula = false;
    } else {
      this.enMayuscula = true;
    }
  }

  changeT(param: string) {
    if (param === 'nombre') {
      this.orden = param;
    } else if (param === 'vuela') {
      this.orden = param;
    } else if (param === 'color') {
      this.orden = param;
    } else {
      this.orden = this.orden;
    }
  }
}
