import { TestBed } from '@angular/core/testing';

import { LoginActivationGuard } from './login-activation.guard';

describe('LoginActivationGuard', () => {
  let guard: LoginActivationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginActivationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
