import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidCheckDetailComponent } from './covid-check-detail.component';


describe('CovidCheckDetailComponent', () => {
  let component: CovidCheckDetailComponent;
  let fixture: ComponentFixture<CovidCheckDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CovidCheckDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCheckDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
