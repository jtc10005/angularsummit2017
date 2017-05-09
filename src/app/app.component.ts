import { Component } from '@angular/core';
import { PersonService } from './person.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people = [];
  LastSorted: string = '';

  constructor(private ps: PersonService) {
  }

  checkSearch(term) {
    if (term.length < 2) {
      this.people = [];
    } else {
      this.ps.getPeople(term).subscribe((response) => {
        this.people = response.people;
      });
    }
  }

  sort(field: string) {
    if (this.LastSorted === field) {
      this.people.reverse();
    } else {
      this.LastSorted = field;
      this.people.sort((x, y) => { return +(x[field] <= y[field]) || +(x[field] = y[field]); })
    }
  }
}
