import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandatapayorComponent } from './sandatapayor.component';

describe('SandatapayorComponent', () => {
  let component: SandatapayorComponent;
  let fixture: ComponentFixture<SandatapayorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SandatapayorComponent]
    });
    fixture = TestBed.createComponent(SandatapayorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
