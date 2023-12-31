import { Component } from "@angular/core";
import { Car } from './car';

@Component({
  selector: 'app-root',
  template: `
    <table>
      <tr *ngFor="let car of cars">
        <td>{{ car.make }}</td>
        <td>{{ car.model }}</td>
        <td><button (click)="showCar(car)">Click me!</button></td> <!-- Appel de showCar avec l'argument car -->
      </tr>
    </table>
  `,
  styles: []
})
export class AppComponent {
  cars = [
    new Car('car1', 2002, 'bmw', 'm3', 'https://en.wikipedia.org/wiki/BMW_M3'),
    new Car('car2', 2017, 'acura', 'nsx', 'https://en.wikipedia.org/wiki/Honda_NSX'),
    new Car('car3', 2016, 'chevy', 'camaro', 'https://en.wikipedia.org/wiki/Chevrolet_Camaro')
  ];

  showCar(car: Car) { // Utilisation du type "Car" pour l'argument car
    const description = car.make;
    if (window.confirm('Click "ok" to be redirected to ' + car.article)) {
      window.location.href = car.article; // Correction de la propriété "href"
    }
  }
}
