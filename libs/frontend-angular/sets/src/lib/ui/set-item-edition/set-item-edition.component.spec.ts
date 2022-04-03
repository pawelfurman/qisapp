import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetItemEditionComponent } from './set-item-edition.component';

describe('SetItemEditionComponent', () => {
  let component: SetItemEditionComponent;
  let fixture: ComponentFixture<SetItemEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetItemEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetItemEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
