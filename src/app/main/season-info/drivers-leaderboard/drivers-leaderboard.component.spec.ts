import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriversLeaderboardComponent } from './drivers-leaderboard.component';

describe('DriversLeaderboardComponent', () => {
  let component: DriversLeaderboardComponent;
  let fixture: ComponentFixture<DriversLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriversLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriversLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
