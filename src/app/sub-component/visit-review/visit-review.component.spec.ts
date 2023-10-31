import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitReviewComponent } from './visit-review.component';

describe('VisitReviewComponent', () => {
  let component: VisitReviewComponent;
  let fixture: ComponentFixture<VisitReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitReviewComponent]
    });
    fixture = TestBed.createComponent(VisitReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
