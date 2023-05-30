import { TestBed } from '@angular/core/testing';

import { NavServicesService } from './services/nav-services.service';

describe('NavServicesService', () => {
  let service: NavServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
