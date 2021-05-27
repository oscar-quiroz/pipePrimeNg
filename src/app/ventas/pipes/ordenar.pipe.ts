import { Pipe, PipeTransform } from '@angular/core';
import { Heore } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar',
})
export class OrdenarPipe implements PipeTransform {
  transform(heroes: Heore[], ordenarPor: string = 'sin valor'): Heore[] {
    if (ordenarPor === 'sin valor') {
      return heroes;
    } else if (ordenarPor === 'nombre') {
      heroes = heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
      return heroes;
    } else if (ordenarPor === 'vuela') {
      heroes = heroes.sort((a, b) => (a.vuela > b.vuela ? -1 : 1));
      return heroes;
    } else if (ordenarPor === 'color') {
      heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
      return heroes;
    }
  }
}
