import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocietesService, InputSocietesDto, SocietesDto } from 'src/app/shared/services/societes.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-societes',
  templateUrl: './add-societes.component.html',
  styleUrls: ['./add-societes.component.scss']
})

export class AddSocietesComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idSociete: any = 0;
  societesDto: InputSocietesDto | undefined;
  public societesGroup = new FormGroup({
    civilite : new FormControl('', [Validators.required]),
    nom : new FormControl('', [Validators.required]),
    prenom : new FormControl('', [Validators.required]),
    date_de_naissance : new FormControl('', [Validators.required]),
    nom_Societe : new FormControl('', [Validators.required]),
    fonction : new FormControl('', [Validators.required]),
    nom_d_utilisateur : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    mot_de_passe : new FormControl('', [Validators.required]),
    code_Parainnage : new FormControl('', [Validators.required]),
    comment_connu : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
              private societesService: SocietesService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
  }
  
  getSocietes(idSociete: number) {
    this.societesService.getEditSocietes(idSociete).subscribe(res => {
      this.societesDto = res;      
      this.numero_tva?.setValue(res.numero_tva);        
      this.civilite?.setValue(res.civilite);        
      this.pays?.setValue(res.pays);        
      this.nom_Societe?.setValue(res.nom_Societe);        
      this.nom?.setValue(res.nom);        
      this.code_Parainnage?.setValue(res.code_Parainnage);        
      this.adresse?.setValue(res.adresse);        
      this.tel_Portable?.setValue(res.tel_Portable);        
      this.matricule?.setValue(res.matricule);        
      this.tel_Fixe?.setValue(res.tel_Fixe);        
      this.statut?.setValue(res.statut);        
      this.photo_Profil?.setValue(res.photo_Profil);        
      this.ville?.setValue(res.ville);        
      this.domaine_Activite?.setValue(res.domaine_Activite);        
      this.mot_de_passe?.setValue(res.mot_de_passe);        
      this.nom_d_utilisateur?.setValue(res.nom_d_utilisateur);        
      this.cp?.setValue(res.cp);        
      this.date_de_naissance?.setValue(res.date_de_naissance);        
      this.fonction?.setValue(res.fonction);        
      this.prenom?.setValue(res.prenom);        
      this.email?.setValue(res.email);        
      this.comment_connu?.setValue(res.comment_connu);  
    });    
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.idSociete = Number(params.get('idSociete'));
      this.getSocietes(this.idSociete);
    });
  }

  onSubmit() {
    this.societesGroup.markAllAsTouched();
    if (this.societesGroup.valid) { 
     if(this.idSociete>0){
      var societesDto: InputSocietesDto = {
        idSociete: this.idSociete,        
        numero_tva: this.societesGroup.get('numero_tva')?.value,        
        civilite: this.societesGroup.get('civilite')?.value,        
        pays: this.societesGroup.get('pays')?.value,        
        nom_Societe: this.societesGroup.get('nom_Societe')?.value,        
        nom: this.societesGroup.get('nom')?.value,        
        code_Parainnage: this.societesGroup.get('code_Parainnage')?.value,        
        adresse: this.societesGroup.get('adresse')?.value,        
        tel_Portable: this.societesGroup.get('tel_Portable')?.value,        
        matricule: this.societesGroup.get('matricule')?.value,        
        tel_Fixe: this.societesGroup.get('tel_Fixe')?.value,        
        statut: this.societesGroup.get('statut')?.value,        
        photo_Profil: this.societesGroup.get('photo_Profil')?.value,        
        ville: this.societesGroup.get('ville')?.value,        
        domaine_Activite: this.societesGroup.get('domaine_Activite')?.value,        
        mot_de_passe: this.societesGroup.get('mot_de_passe')?.value,        
        nom_d_utilisateur: this.societesGroup.get('nom_d_utilisateur')?.value,        
        cp: this.societesGroup.get('cp')?.value,        
        date_de_naissance: this.societesGroup.get('date_de_naissance')?.value,        
        fonction: this.societesGroup.get('fonction')?.value,        
        prenom: this.societesGroup.get('prenom')?.value,        
        email: this.societesGroup.get('email')?.value,        
        comment_connu: this.societesGroup.get('comment_connu')?.value
      }

      this.societesService.updateSocietes(societesDto).subscribe(res => {
        this.toastr.success('Create societes', 'Sucess');
      });
     }
     else{
      var societesDto: InputSocietesDto = {
        idSociete: this.idSociete,        
        numero_tva: this.societesGroup.get('numero_tva')?.value,        
        civilite: this.societesGroup.get('civilite')?.value,        
        pays: this.societesGroup.get('pays')?.value,        
        nom_Societe: this.societesGroup.get('nom_Societe')?.value,        
        nom: this.societesGroup.get('nom')?.value,        
        code_Parainnage: this.societesGroup.get('code_Parainnage')?.value,        
        adresse: this.societesGroup.get('adresse')?.value,        
        tel_Portable: this.societesGroup.get('tel_Portable')?.value,        
        matricule: this.societesGroup.get('matricule')?.value,        
        tel_Fixe: this.societesGroup.get('tel_Fixe')?.value,        
        statut: this.societesGroup.get('statut')?.value,        
        photo_Profil: this.societesGroup.get('photo_Profil')?.value,        
        ville: this.societesGroup.get('ville')?.value,        
        domaine_Activite: this.societesGroup.get('domaine_Activite')?.value,        
        mot_de_passe: this.societesGroup.get('mot_de_passe')?.value,        
        nom_d_utilisateur: this.societesGroup.get('nom_d_utilisateur')?.value,        
        cp: this.societesGroup.get('cp')?.value,        
        date_de_naissance: this.societesGroup.get('date_de_naissance')?.value,        
        fonction: this.societesGroup.get('fonction')?.value,        
        prenom: this.societesGroup.get('prenom')?.value,        
        email: this.societesGroup.get('email')?.value,        
        comment_connu: this.societesGroup.get('comment_connu')?.value
      }

      this.societesService.createSocietes(societesDto).subscribe(res => {
        this.toastr.success('Create societes', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get numero_tva() { return this.societesGroup.get('numero_tva'); }  
  get civilite() { return this.societesGroup.get('civilite'); }  
  get pays() { return this.societesGroup.get('pays'); }  
  get nom_Societe() { return this.societesGroup.get('nom_Societe'); }  
  get nom() { return this.societesGroup.get('nom'); }  
  get code_Parainnage() { return this.societesGroup.get('code_Parainnage'); }  
  get adresse() { return this.societesGroup.get('adresse'); }  
  get tel_Portable() { return this.societesGroup.get('tel_Portable'); }  
  get matricule() { return this.societesGroup.get('matricule'); }  
  get tel_Fixe() { return this.societesGroup.get('tel_Fixe'); }  
  get statut() { return this.societesGroup.get('statut'); }  
  get photo_Profil() { return this.societesGroup.get('photo_Profil'); }  
  get ville() { return this.societesGroup.get('ville'); }  
  get domaine_Activite() { return this.societesGroup.get('domaine_Activite'); }  
  get mot_de_passe() { return this.societesGroup.get('mot_de_passe'); }  
  get nom_d_utilisateur() { return this.societesGroup.get('nom_d_utilisateur'); }  
  get cp() { return this.societesGroup.get('cp'); }  
  get date_de_naissance() { return this.societesGroup.get('date_de_naissance'); }  
  get fonction() { return this.societesGroup.get('fonction'); }  
  get prenom() { return this.societesGroup.get('prenom'); }  
  get email() { return this.societesGroup.get('email'); }  
  get comment_connu() { return this.societesGroup.get('comment_connu'); }
}