import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiDriverComponent } from './li-driver.component';

describe('LiDriverComponent', () => {
  let component: LiDriverComponent;
  let fixture: ComponentFixture<LiDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
