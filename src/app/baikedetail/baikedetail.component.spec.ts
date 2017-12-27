import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaikedetailComponent } from './baikedetail.component';

describe('BaikedetailComponent', () => {
  let component: BaikedetailComponent;
  let fixture: ComponentFixture<BaikedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaikedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaikedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
