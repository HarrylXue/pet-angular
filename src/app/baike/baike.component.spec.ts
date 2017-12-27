import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaikeComponent } from './baike.component';

describe('BaikeComponent', () => {
  let component: BaikeComponent;
  let fixture: ComponentFixture<BaikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
