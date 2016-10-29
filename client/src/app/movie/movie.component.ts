import { Component, Input } from '@angular/core';

@Component({
  selector: 'movie',
  template: `
    <h4>
      {{movie.title}}
    </h4>
    <span>
    Released in {{movie.releasedIn}}
    </span>
  `
})
export class MovieComponent {
  @Input() movie: Object;
}
