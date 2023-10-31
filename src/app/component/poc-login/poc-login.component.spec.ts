import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PocLoginComponent } from './poc-login.component';

describe('PocLoginComponent', () => {
  let component: PocLoginComponent;
  let fixture: ComponentFixture<PocLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PocLoginComponent]
    });
    fixture = TestBed.createComponent(PocLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
