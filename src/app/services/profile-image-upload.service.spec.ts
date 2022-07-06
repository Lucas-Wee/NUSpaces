import { TestBed } from '@angular/core/testing';

import { ProfileImageUploadService } from './profile-image-upload.service';

describe('ProfileImageUploadService', () => {
  let service: ProfileImageUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileImageUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
