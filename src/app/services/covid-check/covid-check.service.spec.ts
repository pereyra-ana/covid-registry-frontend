import { TestBed } from '@angular/core/testing';
import { CovidCheckService } from './covid-check.service';


describe('CovidCheckService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CovidCheckService = TestBed.get(CovidCheckService);
    expect(service).toBeTruthy();
  });
});
