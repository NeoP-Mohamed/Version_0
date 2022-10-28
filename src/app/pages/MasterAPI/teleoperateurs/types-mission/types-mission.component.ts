import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeleoperateursService, InputTeleoperateursDto, TeleoperateursDto } from 'src/app/shared/services/teleoperateurs.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-types-mission',
  templateUrl: './types-mission.component.html',
  styleUrls: ['./types-mission.component.scss']
})

export class TypesMissionComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTeleoperateur: any = 0;
  teleoperateursDto: InputTeleoperateursDto | undefined;
  public TypesMissionGroup = new FormGroup({
    libelle_Type_Mission : new FormControl('', [Validators.required]),
    libelle_Type_Prospect : new FormControl('', [Validators.required]),
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
  get libelle_Type_Mission() { return this.TypesMissionGroup.get('libelle_Type_Mission'); }  
  get libelle_Type_Prospect() { return this.TypesMissionGroup.get('libelle_Type_Prospect'); }
}