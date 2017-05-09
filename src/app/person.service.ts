import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'; // For methods for Observables

@Injectable()
export class PersonService {
  server = 'http://localhost:8081';

  constructor(private http: Http) { }

  getPeople(name: string) {
    return this.http.get(this.server + '/people/' + name)
      .map((res) => res.json());

  }
}
