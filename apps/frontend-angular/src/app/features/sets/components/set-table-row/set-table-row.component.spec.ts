import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTableRowComponent } from './set-table-row.component';

describe('SetTableRowComponent', () => {
  let component: SetTableRowComponent;
  let fixture: ComponentFixture<SetTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetTableRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
