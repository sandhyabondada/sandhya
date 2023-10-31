import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandataCnCotComponent } from './sandata-cn-cot.component';

describe('SandataCnCotComponent', () => {
  let component: SandataCnCotComponent;
  let fixture: ComponentFixture<SandataCnCotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SandataCnCotComponent]
    });
    fixture = TestBed.createComponent(SandataCnCotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
