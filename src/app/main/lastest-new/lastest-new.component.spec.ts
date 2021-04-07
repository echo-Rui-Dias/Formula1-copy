import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestNewComponent } from './lastest-new.component';

describe('LastestNewComponent', () => {
  let component: LastestNewComponent;
  let fixture: ComponentFixture<LastestNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastestNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
