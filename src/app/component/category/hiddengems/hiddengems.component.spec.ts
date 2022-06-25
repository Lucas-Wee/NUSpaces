import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddengemsComponent } from './hiddengems.component';

describe('HiddengemsComponent', () => {
  let component: HiddengemsComponent;
  let fixture: ComponentFixture<HiddengemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddengemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddengemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
