import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { Boite__EnvoieService, InputBoite__EnvoieDto, Boite__EnvoieDto } from 'src/app/shared/services/boite__envoie.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-boite__envoie',
  templateUrl: './add-boite__envoie.component.html',
  styleUrls: ['./add-boite__envoie.component.scss']
})

export class AddBoite__EnvoieComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idBoiteEnvoie: any = 0;
  boite__envoieDto: InputBoite__EnvoieDto | undefined;
  public boite__envoieGroup = new FormGroup({
    boiteGmail : new FormControl('', [Validators.required]),
    titre : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required]),
    identifiant : new FormControl('', [Validators.required]),
    mdp : new FormControl('', [Validators.required]),
    serveur_smtp : new FormControl('', [Validators.required]),
    port_smtp : new FormControl('', [Validators.required]),
    securite : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private boite__envoieService: Boite__EnvoieService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefTeleoperateurs = this.dialog.open(AddTeleoperateursComponent);

    dialogRefTeleoperateurs.afterClosed().subscribe(result => {
      this.getAllTeleoperateurs();
    });
  }
  
  getAllTeleoperateurs() {
    this.teleoperateursService.getAllTeleoperateurs()
      .subscribe((data: Array<TeleoperateursDto>) => {
        this.teleoperateurss = [...data];
      });
  }
  getBoite__Envoie(idBoiteEnvoie: number) {
    this.boite__envoieService.getEditBoite__Envoie(idBoiteEnvoie).subscribe(res => {
      this.boite__envoieDto = res;      
      this.email?.setValue(res.email);        
      this.securite?.setValue(res.securite);        
      this.serveur_smtp?.setValue(res.serveur_smtp);        
      this.port_smtp?.setValue(res.port_smtp);        
      this.identifiant?.setValue(res.identifiant);        
      this.titre?.setValue(res.titre);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.mdp?.setValue(res.mdp);        
      this.etat?.setValue(res.etat);        
      this.dateCreation_Boite?.setValue(res.dateCreation_Boite);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idBoiteEnvoie = Number(params.get('idBoiteEnvoie'));
      this.getBoite__Envoie(this.idBoiteEnvoie);
    });
  }

  onSubmit() {
    this.boite__envoieGroup.markAllAsTouched();
    if (this.boite__envoieGroup.valid) { 
     if(this.idBoiteEnvoie>0){
      var boite__envoieDto: InputBoite__EnvoieDto = {
        idBoiteEnvoie: this.idBoiteEnvoie,        
        email: this.boite__envoieGroup.get('email')?.value,        
        securite: this.boite__envoieGroup.get('securite')?.value,        
        serveur_smtp: this.boite__envoieGroup.get('serveur_smtp')?.value,        
        port_smtp: this.boite__envoieGroup.get('port_smtp')?.value,        
        identifiant: this.boite__envoieGroup.get('identifiant')?.value,        
        titre: this.boite__envoieGroup.get('titre')?.value,        
        idTeleoperateur: this.boite__envoieGroup.get('teleoperateurs')?.value,        
        mdp: this.boite__envoieGroup.get('mdp')?.value,        
        etat: this.boite__envoieGroup.get('etat')?.value,        
        dateCreation_Boite: this.boite__envoieGroup.get('dateCreation_Boite')?.value
      }

      this.boite__envoieService.updateBoite__Envoie(boite__envoieDto).subscribe(res => {
        this.toastr.success('Create boite__envoie', 'Sucess');
      });
     }
     else{
      var boite__envoieDto: InputBoite__EnvoieDto = {
        idBoiteEnvoie: this.idBoiteEnvoie,        
        email: this.boite__envoieGroup.get('email')?.value,        
        securite: this.boite__envoieGroup.get('securite')?.value,        
        serveur_smtp: this.boite__envoieGroup.get('serveur_smtp')?.value,        
        port_smtp: this.boite__envoieGroup.get('port_smtp')?.value,        
        identifiant: this.boite__envoieGroup.get('identifiant')?.value,        
        titre: this.boite__envoieGroup.get('titre')?.value,        
        idTeleoperateur: this.boite__envoieGroup.get('teleoperateurs')?.value,        
        mdp: this.boite__envoieGroup.get('mdp')?.value,        
        etat: this.boite__envoieGroup.get('etat')?.value,        
        dateCreation_Boite: this.boite__envoieGroup.get('dateCreation_Boite')?.value
      }

      this.boite__envoieService.createBoite__Envoie(boite__envoieDto).subscribe(res => {
        this.toastr.success('Create boite__envoie', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get email() { return this.boite__envoieGroup.get('email'); }  
  get securite() { return this.boite__envoieGroup.get('securite'); }  
  get serveur_smtp() { return this.boite__envoieGroup.get('serveur_smtp'); }  
  get port_smtp() { return this.boite__envoieGroup.get('port_smtp'); }  
  get identifiant() { return this.boite__envoieGroup.get('identifiant'); }  
  get titre() { return this.boite__envoieGroup.get('titre'); }  
  get teleoperateurs() { return this.boite__envoieGroup.get('teleoperateurs'); }  
  get mdp() { return this.boite__envoieGroup.get('mdp'); }  
  get etat() { return this.boite__envoieGroup.get('etat'); }  
  get dateCreation_Boite() { return this.boite__envoieGroup.get('dateCreation_Boite'); }
}