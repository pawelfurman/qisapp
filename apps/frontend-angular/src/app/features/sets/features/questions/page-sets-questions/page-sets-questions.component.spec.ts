import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSetsQuestionsComponent } from './page-sets-questions.component';

describe('PageSetsQuestionsComponent', () => {
  let component: PageSetsQuestionsComponent;
  let fixture: ComponentFixture<PageSetsQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSetsQuestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSetsQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
