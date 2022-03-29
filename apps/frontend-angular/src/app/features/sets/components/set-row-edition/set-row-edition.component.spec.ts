import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRowEditionComponent } from './set-row-edition.component';

describe('SetRowEditionComponent', () => {
  let component: SetRowEditionComponent;
  let fixture: ComponentFixture<SetRowEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetRowEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetRowEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
