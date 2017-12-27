import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MylocalComponent } from './mylocal.component';

describe('MylocalComponent', () => {
  let component: MylocalComponent;
  let fixture: ComponentFixture<MylocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MylocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
