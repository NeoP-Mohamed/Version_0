import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeleoperateursService, InputTeleoperateursDto, TeleoperateursDto } from 'src/app/shared/services/teleoperateurs.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-donnees-bancaires',
  templateUrl: './donnees-bancaires.component.html',
  styleUrls: ['./donnees-bancaires.component.scss']
})

export class DonneesBancairesComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTeleoperateur: any = 0;
  teleoperateursDto: InputTeleoperateursDto | undefined;
  public DonneesBancairesGroup = new FormGroup({
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
}