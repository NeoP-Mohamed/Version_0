import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioRecorderComponentI } from './audio-recorder.component';

describe('AudioRecorderComponentI', () => {
  let component: AudioRecorderComponentI;
  let fixture: ComponentFixture<AudioRecorderComponentI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudioRecorderComponentI ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioRecorderComponentI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
