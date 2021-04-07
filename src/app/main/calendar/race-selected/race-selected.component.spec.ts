import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceSelectedComponent } from './race-selected.component';

describe('RaceSelectedComponent', () => {
  let component: RaceSelectedComponent;
  let fixture: ComponentFixture<RaceSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
