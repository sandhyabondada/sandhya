import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rough2Component } from './rough2.component';

describe('Rough2Component', () => {
  let component: Rough2Component;
  let fixture: ComponentFixture<Rough2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Rough2Component]
    });
    fixture = TestBed.createComponent(Rough2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
