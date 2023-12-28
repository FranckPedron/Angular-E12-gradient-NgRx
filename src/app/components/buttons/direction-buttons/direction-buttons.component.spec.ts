import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionButtonsComponent } from './direction-buttons.component';

describe('DirectionButtonsComponent', () => {
  let component: DirectionButtonsComponent;
  let fixture: ComponentFixture<DirectionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectionButtonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DirectionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
