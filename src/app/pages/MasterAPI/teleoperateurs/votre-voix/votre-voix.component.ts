import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeleoperateursService, InputTeleoperateursDto, TeleoperateursDto } from 'src/app/shared/services/teleoperateurs.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-votre-voix',
  templateUrl: './votre-voix.component.html',
  styleUrls: ['./votre-voix.component.scss']
})

export class VotreVoixComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTeleoperateur: any = 0;
  teleoperateursDto: InputTeleoperateursDto | undefined;
  public VotreVoixGroup = new FormGroup({
    voix : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
              private teleoperateursService: TeleoperateursService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }  
  get voix() { return this.VotreVoixGroup.get('voix'); }
}