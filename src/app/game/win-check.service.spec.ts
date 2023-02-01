import { TestBed } from '@angular/core/testing';

import { WinCheckService } from './win-check.service';

describe('WinCheckService', () => {
  let service: WinCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WinCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
