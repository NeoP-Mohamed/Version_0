import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleoperatorsComponent } from './teleoperators.component';

describe('TeleoperatorsComponent', () => {
  let component: TeleoperatorsComponent;
  let fixture: ComponentFixture<TeleoperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleoperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleoperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
