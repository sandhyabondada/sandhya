import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnCotComponent } from './cn-cot.component';

describe('CnCotComponent', () => {
  let component: CnCotComponent;
  let fixture: ComponentFixture<CnCotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CnCotComponent]
    });
    fixture = TestBed.createComponent(CnCotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
