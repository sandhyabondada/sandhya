import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayorPlanserviceComponent } from './payor-planservice.component';

describe('PayorPlanserviceComponent', () => {
  let component: PayorPlanserviceComponent;
  let fixture: ComponentFixture<PayorPlanserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayorPlanserviceComponent]
    });
    fixture = TestBed.createComponent(PayorPlanserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
