import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenicviewsComponent } from './scenicviews.component';

describe('ScenicviewsComponent', () => {
  let component: ScenicviewsComponent;
  let fixture: ComponentFixture<ScenicviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenicviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenicviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
