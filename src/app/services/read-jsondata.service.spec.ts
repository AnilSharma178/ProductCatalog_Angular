import { TestBed, inject } from '@angular/core/testing';

import {  ReadJsonFile } from './read-jsondata.service';

describe('ReadJSONDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadJsonFile]
    });
  });

  it('should be created', inject([ReadJsonFile], (service: ReadJsonFile) => {
    expect(service).toBeTruthy();
  }));
});
