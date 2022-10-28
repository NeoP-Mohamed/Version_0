import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TeleoperateursService, InputTeleoperateursDto, TeleoperateursDto } from 'src/app/shared/services/teleoperateurs.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-teleoperateurs',
  templateUrl: './add-teleoperateurs.component.html',
  styleUrls: ['./add-teleoperateurs.component.scss']
})

export class AddTeleoperateursComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTeleoperateur: any = 0;
  teleoperateursDto: InputTeleoperateursDto | undefined;
  public teleoperateursGroup = new FormGroup({
    civilite : new FormControl('', [Validators.required]),
    nom : new FormControl('', [Validators.required]),
    prenom : new FormControl('', [Validators.required]),
    date_de_naissance : new FormControl('', [Validators.required]),
    nom_d_utilisateur : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    mot_de_passe : new FormControl('', [Validators.required]),
    code_Parainnage : new FormControl('', [Validators.required]),
    comment_connu : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
              private teleoperateursService: TeleoperateursService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
  }
  
  getTeleoperateurs(idTeleoperateur: number) {
    this.teleoperateursService.getEditTeleoperateurs(idTeleoperateur).subscribe(res => {
      this.teleoperateursDto = res;      
      this.nom_Societe?.setValue(res.nom_Societe);        
      this.tel_Fixe?.setValue(res.tel_Fixe);        
      this.pays?.setValue(res.pays);        
      this.presentation?.setValue(res.presentation);        
      this.mot_de_passe?.setValue(res.mot_de_passe);        
      this.debit?.setValue(res.debit);        
      this.type_Connexion?.setValue(res.type_Connexion);        
      this.ville?.setValue(res.ville);        
      this.code_Parainnage?.setValue(res.code_Parainnage);        
      this.cp?.setValue(res.cp);        
      this.photo_Profil?.setValue(res.photo_Profil);        
      this.adresse?.setValue(res.adresse);        
      this.tel_Portable?.setValue(res.tel_Portable);        
      this.voix?.setValue(res.voix);        
      this.nom_d_utilisateur?.setValue(res.nom_d_utilisateur);        
      this.nom?.setValue(res.nom);        
      this.numero_tva?.setValue(res.numero_tva);        
      this.date_de_naissance?.setValue(res.date_de_naissance);        
      this.bilan?.setValue(res.bilan);        
      this.statut?.setValue(res.statut);        
      this.civilite?.setValue(res.civilite);        
      this.photo_Matricule?.setValue(res.photo_Matricule);        
      this.matricule?.setValue(res.matricule);        
      this.comment_connu?.setValue(res.comment_connu);        
      this.email?.setValue(res.email);        
      this.prenom?.setValue(res.prenom);  
    });    
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.idTeleoperateur = Number(params.get('idTeleoperateur'));
      this.getTeleoperateurs(this.idTeleoperateur);
    });
  }

  onSubmit() {
    this.teleoperateursGroup.markAllAsTouched();
    if (this.teleoperateursGroup.valid) { 
     if(this.idTeleoperateur>0){
      var teleoperateursDto: InputTeleoperateursDto = {
        idTeleoperateur: this.idTeleoperateur,        
        nom_Societe: this.teleoperateursGroup.get('nom_Societe')?.value,        
        tel_Fixe: this.teleoperateursGroup.get('tel_Fixe')?.value,        
        pays: this.teleoperateursGroup.get('pays')?.value,        
        presentation: this.teleoperateursGroup.get('presentation')?.value,        
        mot_de_passe: this.teleoperateursGroup.get('mot_de_passe')?.value,        
        debit: this.teleoperateursGroup.get('debit')?.value,        
        type_Connexion: this.teleoperateursGroup.get('type_Connexion')?.value,        
        ville: this.teleoperateursGroup.get('ville')?.value,        
        code_Parainnage: this.teleoperateursGroup.get('code_Parainnage')?.value,        
        cp: this.teleoperateursGroup.get('cp')?.value,        
        photo_Profil: this.teleoperateursGroup.get('photo_Profil')?.value,        
        adresse: this.teleoperateursGroup.get('adresse')?.value,        
        tel_Portable: this.teleoperateursGroup.get('tel_Portable')?.value,        
        voix: this.teleoperateursGroup.get('voix')?.value,        
        nom_d_utilisateur: this.teleoperateursGroup.get('nom_d_utilisateur')?.value,        
        nom: this.teleoperateursGroup.get('nom')?.value,        
        numero_tva: this.teleoperateursGroup.get('numero_tva')?.value,        
        date_de_naissance: this.teleoperateursGroup.get('date_de_naissance')?.value,        
        bilan: this.teleoperateursGroup.get('bilan')?.value,        
        statut: this.teleoperateursGroup.get('statut')?.value,        
        civilite: this.teleoperateursGroup.get('civilite')?.value,        
        photo_Matricule: this.teleoperateursGroup.get('photo_Matricule')?.value,        
        matricule: this.teleoperateursGroup.get('matricule')?.value,        
        comment_connu: this.teleoperateursGroup.get('comment_connu')?.value,        
        email: this.teleoperateursGroup.get('email')?.value,        
        prenom: this.teleoperateursGroup.get('prenom')?.value
      }

      this.teleoperateursService.updateTeleoperateurs(teleoperateursDto).subscribe(res => {
        this.toastr.success('Create teleoperateurs', 'Sucess');
      });
     }
     else{
      var teleoperateursDto: InputTeleoperateursDto = {
        idTeleoperateur: this.idTeleoperateur,        
        nom_Societe: this.teleoperateursGroup.get('nom_Societe')?.value,        
        tel_Fixe: this.teleoperateursGroup.get('tel_Fixe')?.value,        
        pays: this.teleoperateursGroup.get('pays')?.value,        
        presentation: this.teleoperateursGroup.get('presentation')?.value,        
        mot_de_passe: this.teleoperateursGroup.get('mot_de_passe')?.value,        
        debit: this.teleoperateursGroup.get('debit')?.value,        
        type_Connexion: this.teleoperateursGroup.get('type_Connexion')?.value,        
        ville: this.teleoperateursGroup.get('ville')?.value,        
        code_Parainnage: this.teleoperateursGroup.get('code_Parainnage')?.value,        
        cp: this.teleoperateursGroup.get('cp')?.value,        
        photo_Profil: this.teleoperateursGroup.get('photo_Profil')?.value,        
        adresse: this.teleoperateursGroup.get('adresse')?.value,        
        tel_Portable: this.teleoperateursGroup.get('tel_Portable')?.value,        
        voix: this.teleoperateursGroup.get('voix')?.value,        
        nom_d_utilisateur: this.teleoperateursGroup.get('nom_d_utilisateur')?.value,        
        nom: this.teleoperateursGroup.get('nom')?.value,        
        numero_tva: this.teleoperateursGroup.get('numero_tva')?.value,        
        date_de_naissance: this.teleoperateursGroup.get('date_de_naissance')?.value,        
        bilan: this.teleoperateursGroup.get('bilan')?.value,        
        statut: this.teleoperateursGroup.get('statut')?.value,        
        civilite: this.teleoperateursGroup.get('civilite')?.value,        
        photo_Matricule: this.teleoperateursGroup.get('photo_Matricule')?.value,        
        matricule: this.teleoperateursGroup.get('matricule')?.value,        
        comment_connu: this.teleoperateursGroup.get('comment_connu')?.value,        
        email: this.teleoperateursGroup.get('email')?.value,        
        prenom: this.teleoperateursGroup.get('prenom')?.value
      }

      this.teleoperateursService.createTeleoperateurs(teleoperateursDto).subscribe(res => {
        this.toastr.success('Create teleoperateurs', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get nom_Societe() { return this.teleoperateursGroup.get('nom_Societe'); }  
  get tel_Fixe() { return this.teleoperateursGroup.get('tel_Fixe'); }  
  get pays() { return this.teleoperateursGroup.get('pays'); }  
  get presentation() { return this.teleoperateursGroup.get('presentation'); }  
  get mot_de_passe() { return this.teleoperateursGroup.get('mot_de_passe'); }  
  get debit() { return this.teleoperateursGroup.get('debit'); }  
  get type_Connexion() { return this.teleoperateursGroup.get('type_Connexion'); }  
  get ville() { return this.teleoperateursGroup.get('ville'); }  
  get code_Parainnage() { return this.teleoperateursGroup.get('code_Parainnage'); }  
  get cp() { return this.teleoperateursGroup.get('cp'); }  
  get photo_Profil() { return this.teleoperateursGroup.get('photo_Profil'); }  
  get adresse() { return this.teleoperateursGroup.get('adresse'); }  
  get tel_Portable() { return this.teleoperateursGroup.get('tel_Portable'); }  
  get voix() { return this.teleoperateursGroup.get('voix'); }  
  get nom_d_utilisateur() { return this.teleoperateursGroup.get('nom_d_utilisateur'); }  
  get nom() { return this.teleoperateursGroup.get('nom'); }  
  get numero_tva() { return this.teleoperateursGroup.get('numero_tva'); }  
  get date_de_naissance() { return this.teleoperateursGroup.get('date_de_naissance'); }  
  get bilan() { return this.teleoperateursGroup.get('bilan'); }  
  get statut() { return this.teleoperateursGroup.get('statut'); }  
  get civilite() { return this.teleoperateursGroup.get('civilite'); }  
  get photo_Matricule() { return this.teleoperateursGroup.get('photo_Matricule'); }  
  get matricule() { return this.teleoperateursGroup.get('matricule'); }  
  get comment_connu() { return this.teleoperateursGroup.get('comment_connu'); }  
  get email() { return this.teleoperateursGroup.get('email'); }  
  get prenom() { return this.teleoperateursGroup.get('prenom'); }
}