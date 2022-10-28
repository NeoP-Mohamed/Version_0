
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlay }  from '@fortawesome/free-solid-svg-icons';
import { AudioRecorderService } from './audio-record.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-audio-recorder',
  templateUrl: './audio-recorder.component.html',
  styleUrls: ['./audio-recorder.component.scss']
})
export class AudioRecorderComponent implements OnInit,OnDestroy  {
  recBtnClicked = false;
  isRecording = false;
  isPaused = false;
  recordedTime:any;
  blobUrl:any;
  blobData:any;
  blobTitle:any;
  faSquare = faSquare;
  faPlay = faPlay;

  constructor(private audioRecorderService: AudioRecorderService, private sanitizer: DomSanitizer) {
    this.audioRecorderService.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audioRecorderService.getRecordedTime().subscribe((time:any) => {
      this.recordedTime = time;
    });

    this.audioRecorderService.getRecordedBlob().subscribe((data:any) => {
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      this.blobData = data.blob;
      this.blobTitle = data.title;
    });
  }

  ngOnInit(): void {
  }

  onRecClicked(){
    this.recBtnClicked = true;
    this.isPaused = false;
    this.blobUrl = null;
    if (!this.isRecording) {
      this.isRecording = true;
      this.audioRecorderService.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audioRecorderService.abortRecording();
    }
  }

  /*   onPauseClicked(){
      if (this.isRecording) {
        this.audioRecorderService.pauseRecording();
        this.isRecording = false;
        this.isPaused = true;
      }
    }
    onPlayClicked(){
      if (!this.isRecording) {
        this.audioRecorderService.resumeRecording();
        this.isRecording = true;
        this.isPaused = false;
      }
    } */

  onStopClicked(){
    this.recBtnClicked = false;

    this.audioRecorderService.stopRecording();
    this.isRecording = false;

  }

  onSaveBtnClicked(){
    saveAs(this.blobData, this.blobTitle);
  }

  ngOnDestroy(): void {
    this.abortRecording();
  }


}
