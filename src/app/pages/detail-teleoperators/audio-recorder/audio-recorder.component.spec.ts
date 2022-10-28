import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioRecordersComponent } from './audio-recorder.component';

describe('AudioRecordersComponent', () => {
  let component: AudioRecordersComponent;
  let fixture: ComponentFixture<AudioRecordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioRecordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioRecordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
