import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeleoperateursService, InputTeleoperateursDto, TeleoperateursDto } from 'src/app/shared/services/teleoperateurs.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-secteurs-activite',
  templateUrl: './secteurs-activite.component.html',
  styleUrls: ['./secteurs-activite.component.scss']
})

export class SecteursActiviteComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTeleoperateur: any = 0;
  teleoperateursDto: InputTeleoperateursDto | undefined;
  public SecteursActiviteGroup = new FormGroup({
    libelle_Type_Secteur_Activite : new FormControl('', [Validators.required]),
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
  get libelle_Type_Secteur_Activite() { return this.SecteursActiviteGroup.get('libelle_Type_Secteur_Activite'); }
}