import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSetsComponent } from './page-sets.component';

describe('PageSetsComponent', () => {
  let component: PageSetsComponent;
  let fixture: ComponentFixture<PageSetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
