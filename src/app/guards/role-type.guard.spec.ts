import { TestBed, async, inject } from '@angular/core/testing';

import { RoleTypeGuard } from './role-type.guard';

describe('RoleTypeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleTypeGuard]
    });
  });

  it('should ...', inject([RoleTypeGuard], (guard: RoleTypeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
