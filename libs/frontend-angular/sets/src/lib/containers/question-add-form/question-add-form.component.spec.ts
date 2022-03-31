import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAddFormComponent } from './question-add-form.component';

describe('QuestionAddFormComponent', () => {
  let component: QuestionAddFormComponent;
  let fixture: ComponentFixture<QuestionAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
