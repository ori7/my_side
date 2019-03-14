import { TestBed } from '@angular/core/testing';

import { RecipeSocketService } from './recipe-socket.service';

describe('RecipeSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeSocketService = TestBed.get(RecipeSocketService);
    expect(service).toBeTruthy();
  });
});
