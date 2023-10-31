import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPayorplanComponent } from './edit-payorplan.component';

describe('EditPayorplanComponent', () => {
  let component: EditPayorplanComponent;
  let fixture: ComponentFixture<EditPayorplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditPayorplanComponent]
    });
    fixture = TestBed.createComponent(EditPayorplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
