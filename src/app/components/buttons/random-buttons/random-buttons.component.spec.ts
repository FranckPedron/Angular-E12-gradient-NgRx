import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomButtonsComponent } from './random-buttons.component';

describe('RandomButtonsComponent', () => {
  let component: RandomButtonsComponent;
  let fixture: ComponentFixture<RandomButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
