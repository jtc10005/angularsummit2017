/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PersonService } from './person.service';
import { HttpModule } from '@angular/http';

describe('PersonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PersonService],
      imports: [HttpModule]
    });
  });

  it('should ...', inject([PersonService], (service: PersonService) => {
    expect(service).toBeTruthy();
  }));

  it('should have length', inject([PersonService], (service: PersonService) => {
    service.getPeople('jon').subscribe(res => {
      expect(res.people.length).toBeGreaterThan(0);
    });
  }));

  it('should have 2', inject([PersonService], (service: PersonService) => {
    service.getPeople('test').subscribe(res => {
      expect(res.people.length).toBe(2);
    });
  }));

  it('should be nothing', inject([PersonService], (service: PersonService) => {
    service.getPeople('xxx').subscribe(res => {
      expect(res.people.length).toBe(0);
    });
  }));
});
