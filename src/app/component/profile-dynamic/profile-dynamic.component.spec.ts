import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDynamicComponent } from './profile-dynamic.component';

describe('ProfileDynamicComponent', () => {
  let component: ProfileDynamicComponent;
  let fixture: ComponentFixture<ProfileDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
