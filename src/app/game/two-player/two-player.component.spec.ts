import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoPlayerComponent } from './two-player.component';

describe('TwoPlayerComponent', () => {
  let component: TwoPlayerComponent;
  let fixture: ComponentFixture<TwoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
