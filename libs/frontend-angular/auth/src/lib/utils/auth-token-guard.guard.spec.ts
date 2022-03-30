import { TestBed } from '@angular/core/testing';

import { AuthTokenGuardGuard } from './auth-token-guard.guard';

describe('AuthTokenGuardGuard', () => {
  let guard: AuthTokenGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthTokenGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
