import { Component, Input } from '@angular/core';

@Component({
  selector: 'director',
  template: `
    <div>
      <img [src]="director.image"/>
      <h2>{{director.firstName}} {{director.lastName}}</h2>
    </div>

    <div>
      <movies-list-container [director]="director"></movies-list-container>
    </div>
  `
})
export class DirectorComponent {
  @Input() director: Object;
}
