import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeleoperateursService, InputTeleoperateursDto, TeleoperateursDto } from 'src/app/shared/services/teleoperateurs.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-donnees-personnelles',
  templateUrl: './donnees-personnelles.component.html',
  styleUrls: ['./donnees-personnelles.component.scss']
})

export class DonneesPersonnellesComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTeleoperateur: any = 0;
  teleoperateursDto: InputTeleoperateursDto | undefined;
  public DonneesPersonnellesGroup = new FormGroup({
    civilite : new FormControl('', [Validators.required]),
    nom : new FormControl('', [Validators.required]),
    prenom : new FormControl('', [Validators.required]),
    date_de_naissance : new FormControl('', [Validators.required]),
    mot_de_passe : new FormControl('', [Validators.required]),
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
  get civilite() { return this.DonneesPersonnellesGroup.get('civilite'); }  
  get nom() { return this.DonneesPersonnellesGroup.get('nom'); }  
  get prenom() { return this.DonneesPersonnellesGroup.get('prenom'); }  
  get date_de_naissance() { return this.DonneesPersonnellesGroup.get('date_de_naissance'); }  
  get mot_de_passe() { return this.DonneesPersonnellesGroup.get('mot_de_passe'); }
}