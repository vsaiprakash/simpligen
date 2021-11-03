import { TestBed } from '@angular/core/testing';

import { CategorySelectorService } from './category-selector.service';

describe('CategorySelectorService', () => {
  let service: CategorySelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategorySelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
