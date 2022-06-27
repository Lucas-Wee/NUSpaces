import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EateriesComponent } from './eateries.component';

describe('EateriesComponent', () => {
  let component: EateriesComponent;
  let fixture: ComponentFixture<EateriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EateriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EateriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
