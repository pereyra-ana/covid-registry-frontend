import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CovidCheckNewComponent } from './covid-check-new.component';


describe('CovidCheckNewComponent', () => {
  let component: CovidCheckNewComponent;
  let fixture: ComponentFixture<CovidCheckNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CovidCheckNewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidCheckNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
