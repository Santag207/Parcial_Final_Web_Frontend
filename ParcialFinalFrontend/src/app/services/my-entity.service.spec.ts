import { TestBed } from '@angular/core/testing';

import { MyEntityService } from './my-entity.service';

describe('MyEntityService', () => {
  let service: MyEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
