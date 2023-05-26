import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStudentResultComponent } from './edit-student-result.component';

describe('EditStudentResultComponent', () => {
  let component: EditStudentResultComponent;
  let fixture: ComponentFixture<EditStudentResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStudentResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStudentResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
