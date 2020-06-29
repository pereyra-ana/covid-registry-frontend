import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidCheckListComponent } from './covid-check-list.component';


describe('CovidCheckListComponent', () => {
  let component: CovidCheckListComponent;
  let fixture: ComponentFixture<CovidCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CovidCheckListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
