import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeleoperateursService, InputTeleoperateursDto, TeleoperateursDto } from 'src/app/shared/services/teleoperateurs.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-donnees-entreprise',
  templateUrl: './donnees-entreprise.component.html',
  styleUrls: ['./donnees-entreprise.component.scss']
})

export class DonneesEntrepriseComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTeleoperateur: any = 0;
  teleoperateursDto: InputTeleoperateursDto | undefined;
  public DonneesEntrepriseGroup = new FormGroup({
    statut : new FormControl('', [Validators.required]),
    nom_Societe : new FormControl('', [Validators.required]),
    pays : new FormControl('', [Validators.required]),
    existance : new FormControl('', [Validators.required]),
    matricule : new FormControl('', [Validators.required]),
    photo_Matricule : new FormControl('', [Validators.required]),
    assujetti_tva : new FormControl('', [Validators.required]),
    numero_tva : new FormControl('', [Validators.required]),
    adresse : new FormControl('', [Validators.required]),
    cp : new FormControl('', [Validators.required]),
    ville : new FormControl('', [Validators.required]),
    tel_Portable : new FormControl('', [Validators.required]),
    tel_Fixe : new FormControl('', [Validators.required]),
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
  get statut() { return this.DonneesEntrepriseGroup.get('statut'); }  
  get nom_Societe() { return this.DonneesEntrepriseGroup.get('nom_Societe'); }  
  get pays() { return this.DonneesEntrepriseGroup.get('pays'); }  
  get existance() { return this.DonneesEntrepriseGroup.get('existance'); }  
  get matricule() { return this.DonneesEntrepriseGroup.get('matricule'); }  
  get photo_Matricule() { return this.DonneesEntrepriseGroup.get('photo_Matricule'); }  
  get assujetti_tva() { return this.DonneesEntrepriseGroup.get('assujetti_tva'); }  
  get numero_tva() { return this.DonneesEntrepriseGroup.get('numero_tva'); }  
  get adresse() { return this.DonneesEntrepriseGroup.get('adresse'); }  
  get cp() { return this.DonneesEntrepriseGroup.get('cp'); }  
  get ville() { return this.DonneesEntrepriseGroup.get('ville'); }  
  get tel_Portable() { return this.DonneesEntrepriseGroup.get('tel_Portable'); }  
  get tel_Fixe() { return this.DonneesEntrepriseGroup.get('tel_Fixe'); }
}