import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Data } from '../shared/data.service';

@Component({
  selector: 'directors-list',
  template: `
    <director *ngFor="let director of directors" [director]="director"></director>
  `
})
export class DirectorsListComponent {
  @Input() directors: any[];
}
