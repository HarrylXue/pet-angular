import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalhospitalComponent } from './localhospital.component';

describe('LocalhospitalComponent', () => {
  let component: LocalhospitalComponent;
  let fixture: ComponentFixture<LocalhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
