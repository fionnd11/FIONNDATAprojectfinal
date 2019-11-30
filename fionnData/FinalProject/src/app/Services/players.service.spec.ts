import { TestBed } from '@angular/core/testing';

import { PlayersServiceService } from './players.service';

describe('PlayersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayersServiceService = TestBed.get(PlayersServiceService);
    expect(service).toBeTruthy();
  });
});
