import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiLeaderboardComponent } from './li-leaderboard.component';

describe('LiLeaderboardComponent', () => {
  let component: LiLeaderboardComponent;
  let fixture: ComponentFixture<LiLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
