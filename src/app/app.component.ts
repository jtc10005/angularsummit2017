import { Component } from '@angular/core';
import { PersonService } from './person.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people = [];

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
}
