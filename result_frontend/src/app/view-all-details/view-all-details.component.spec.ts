import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllDetailsComponent } from './view-all-details.component';

describe('ViewAllDetailsComponent', () => {
  let component: ViewAllDetailsComponent;
  let fixture: ComponentFixture<ViewAllDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
