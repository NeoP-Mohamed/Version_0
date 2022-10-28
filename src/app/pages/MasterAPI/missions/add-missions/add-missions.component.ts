import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddSocietesComponent } from 'src/app/pages/MasterAPI/societes/add-societes/add-societes.component';
import { SocietesDto, SocietesService } from 'src/app/shared/services/societes.service';
import { MissionsService, InputMissionsDto, MissionsDto } from 'src/app/shared/services/missions.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-missions',
  templateUrl: './add-missions.component.html',
  styleUrls: ['./add-missions.component.scss']
})

export class AddMissionsComponent implements OnInit {
  public societess: SocietesDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idMission: any = 0;
  isVisibleDescription: boolean = false;
  isVisibleEmail: boolean = false;
  isVisibleAgenda: boolean = false;
  isVisibleNotification: boolean = false;
  isVisibleScript: boolean = false;
  isVisibleFichier: boolean = false;
  isVisibleOption: boolean = false;
  isVisibleOptionDivers: boolean = false;
  isVisibleDivers: boolean = false;
  isVisibleAppels: boolean = false;
  missionsDto: InputMissionsDto | undefined;
  public missionsGroup = new FormGroup({
    societes : new FormControl('', [Validators.required]),
    numero : new FormControl('', [Validators.required]),
    visibilite_Mission : new FormControl('', [Validators.required]),
    nom_Mission : new FormControl('', [Validators.required]),
    libelle_Type_Mission : new FormControl('', [Validators.required]),
    libelle_Type_Secteur_Activite : new FormControl('', [Validators.required]),
    type_Prospects : new FormControl('', [Validators.required]),
    type_Fichier : new FormControl('', [Validators.required]),
    pastille_Couleur : new FormControl('', [Validators.required]),
    besoin : new FormControl('', [Validators.required]),
    nbre_rdV_Mission : new FormControl('', [Validators.required]),
    rendez_Vous : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
    script_Appel : new FormControl('', [Validators.required]),
    nbre_rdV_Teleoperateur : new FormControl('', [Validators.required]),
    budget : new FormControl('', [Validators.required]),
    email_Confirmation_rdv : new FormControl('', [Validators.required]),
    email_Rappel_rdv : new FormControl('', [Validators.required]),
    smS_Confirmation_rdv : new FormControl('', [Validators.required]),
    smS_Rappel_rdv : new FormControl('', [Validators.required]),
    email_Teleoperateur : new FormControl('', [Validators.required]),
    reception_sms : new FormControl('', [Validators.required]),
    reception_Fiche_rdv : new FormControl('', [Validators.required]),
    reception_Fiche_rdV_Commercial : new FormControl('', [Validators.required]),
    reception_Mail_Recapitulatif : new FormControl('', [Validators.required]),
    visualisation_rdV_Agenda : new FormControl('', [Validators.required]),
    visialisation_Itineraire : new FormControl('', [Validators.required]),
    duree_rdv : new FormControl('', [Validators.required]),
    unite_Duree_rdv : new FormControl('', [Validators.required]),
    nbre_Jour_Publication : new FormControl('', [Validators.required]),
    date_Debut_Mission : new FormControl('', [Validators.required]),
    visialisation_Details : new FormControl('', [Validators.required]),
    placement_RDV : new FormControl('', [Validators.required]),
    affichage_temps : new FormControl('', [Validators.required]),
    autoriser_Superposition : new FormControl('', [Validators.required]),
    geolocalisation : new FormControl('', [Validators.required]),
    realisation_Mission : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private societesService: SocietesService,
              private missionsService: MissionsService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefSocietes = this.dialog.open(AddSocietesComponent);

    dialogRefSocietes.afterClosed().subscribe(result => {
      this.getAllSocietes();
    });
  }
  
  getAllSocietes() {
    this.societesService.getAllSocietes()
      .subscribe((data: Array<SocietesDto>) => {
        this.societess = [...data];
      });
  }
  getMissions(idMission: number) {
    this.missionsService.getEditMissions(idMission).subscribe(res => {
      this.missionsDto = res;      
      this.numero?.setValue(res.numero);        
      this.nom_Mission?.setValue(res.nom_Mission);        
      this.description?.setValue(res.description);        
      this.type_Fichier?.setValue(res.type_Fichier);        
      this.type_Prospects?.setValue(res.type_Prospects);        
      this.rendez_Vous?.setValue(res.rendez_Vous);        
      this.nbre_rdV_Mission?.setValue(res.nbre_rdV_Mission);        
      this.nbre_rdV_Teleoperateur?.setValue(res.nbre_rdV_Teleoperateur);        
      this.date_Debut_Mission?.setValue(res.date_Debut_Mission);        
      this.script_Appel?.setValue(res.script_Appel);        
      this.societes?.setValue(res.idSociete, { onlySelf: true });      
      this.duree_rdv?.setValue(res.duree_rdv);        
      this.visibilite_Mission?.setValue(res.visibilite_Mission);        
      this.unite_Duree_rdv?.setValue(res.unite_Duree_rdv);        
      this.besoin?.setValue(res.besoin);        
      this.nbre_Jour_Publication?.setValue(res.nbre_Jour_Publication);        
      this.pastille_Couleur?.setValue(res.pastille_Couleur);        
      this.budget?.setValue(res.budget);  
    });    
  }

  ngOnInit(): void {
    this.getAllSocietes();
    this.activatedroute.paramMap.subscribe(params => {
      this.idMission = Number(params.get('idMission'));
      this.getMissions(this.idMission);
    });
  }

  onSubmit() {
    this.missionsGroup.markAllAsTouched();
    if (this.missionsGroup.valid) { 
     if(this.idMission>0){
      var missionsDto: InputMissionsDto = {
        idMission: this.idMission,        
        numero: this.missionsGroup.get('numero')?.value,        
        nom_Mission: this.missionsGroup.get('nom_Mission')?.value,        
        description: this.missionsGroup.get('description')?.value,        
        type_Fichier: this.missionsGroup.get('type_Fichier')?.value,        
        type_Prospects: this.missionsGroup.get('type_Prospects')?.value,        
        rendez_Vous: this.missionsGroup.get('rendez_Vous')?.value,        
        nbre_rdV_Mission: this.missionsGroup.get('nbre_rdV_Mission')?.value,        
        nbre_rdV_Teleoperateur: this.missionsGroup.get('nbre_rdV_Teleoperateur')?.value,        
        date_Debut_Mission: this.missionsGroup.get('date_Debut_Mission')?.value,        
        script_Appel: this.missionsGroup.get('script_Appel')?.value,        
        idSociete: this.missionsGroup.get('societes')?.value,        
        duree_rdv: this.missionsGroup.get('duree_rdv')?.value,        
        visibilite_Mission: this.missionsGroup.get('visibilite_Mission')?.value,        
        unite_Duree_rdv: this.missionsGroup.get('unite_Duree_rdv')?.value,        
        besoin: this.missionsGroup.get('besoin')?.value,        
        nbre_Jour_Publication: this.missionsGroup.get('nbre_Jour_Publication')?.value,        
        pastille_Couleur: this.missionsGroup.get('pastille_Couleur')?.value,        
        budget: this.missionsGroup.get('budget')?.value
      }

      this.missionsService.updateMissions(missionsDto).subscribe(res => {
        this.toastr.success('Create missions', 'Sucess');
      });
     }
     else{
      var missionsDto: InputMissionsDto = {
        idMission: this.idMission,        
        numero: this.missionsGroup.get('numero')?.value,        
        nom_Mission: this.missionsGroup.get('nom_Mission')?.value,        
        description: this.missionsGroup.get('description')?.value,        
        type_Fichier: this.missionsGroup.get('type_Fichier')?.value,        
        type_Prospects: this.missionsGroup.get('type_Prospects')?.value,        
        rendez_Vous: this.missionsGroup.get('rendez_Vous')?.value,        
        nbre_rdV_Mission: this.missionsGroup.get('nbre_rdV_Mission')?.value,        
        nbre_rdV_Teleoperateur: this.missionsGroup.get('nbre_rdV_Teleoperateur')?.value,        
        date_Debut_Mission: this.missionsGroup.get('date_Debut_Mission')?.value,        
        script_Appel: this.missionsGroup.get('script_Appel')?.value,        
        idSociete: this.missionsGroup.get('societes')?.value,        
        duree_rdv: this.missionsGroup.get('duree_rdv')?.value,        
        visibilite_Mission: this.missionsGroup.get('visibilite_Mission')?.value,        
        unite_Duree_rdv: this.missionsGroup.get('unite_Duree_rdv')?.value,        
        besoin: this.missionsGroup.get('besoin')?.value,        
        nbre_Jour_Publication: this.missionsGroup.get('nbre_Jour_Publication')?.value,        
        pastille_Couleur: this.missionsGroup.get('pastille_Couleur')?.value,        
        budget: this.missionsGroup.get('budget')?.value
      }

      this.missionsService.createMissions(missionsDto).subscribe(res => {
        this.toastr.success('Create missions', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get numero() { return this.missionsGroup.get('numero'); }  
  get nom_Mission() { return this.missionsGroup.get('nom_Mission'); }  
  get libelle_Type_Mission() { return this.missionsGroup.get('libelle_Type_Mission'); }  
  get libelle_Type_Secteur_Activite() { return this.missionsGroup.get('libelle_Type_Secteur_Activite'); }  
  get description() { return this.missionsGroup.get('description'); }  
  get type_Fichier() { return this.missionsGroup.get('type_Fichier'); }  
  get type_Prospects() { return this.missionsGroup.get('type_Prospects'); }  
  get rendez_Vous() { return this.missionsGroup.get('rendez_Vous'); }  
  get nbre_rdV_Mission() { return this.missionsGroup.get('nbre_rdV_Mission'); }  
  get nbre_rdV_Teleoperateur() { return this.missionsGroup.get('nbre_rdV_Teleoperateur'); }  
  get date_Debut_Mission() { return this.missionsGroup.get('date_Debut_Mission'); }  
  get script_Appel() { return this.missionsGroup.get('script_Appel'); }  
  get societes() { return this.missionsGroup.get('societes'); }  
  get duree_rdv() { return this.missionsGroup.get('duree_rdv'); }  
  get visibilite_Mission() { return this.missionsGroup.get('visibilite_Mission'); }  
  get unite_Duree_rdv() { return this.missionsGroup.get('unite_Duree_rdv'); }  
  get besoin() { return this.missionsGroup.get('besoin'); }  
  get nbre_Jour_Publication() { return this.missionsGroup.get('nbre_Jour_Publication'); }  
  get pastille_Couleur() { return this.missionsGroup.get('pastille_Couleur'); }  
  get budget() { return this.missionsGroup.get('budget'); } 
  get visialisation_Details() { return this.missionsGroup.get('visialisation_Details'); } 
  get placement_RDV() { return this.missionsGroup.get('placement_RDV'); } 
  get affichage_temps() { return this.missionsGroup.get('affichage_temps'); } 
  get autoriser_Superposition() { return this.missionsGroup.get('autoriser_Superposition'); }
  get geolocalisation() { return this.missionsGroup.get('geolocalisation'); }
  get realisation_Mission() { return this.missionsGroup.get('realisation_Mission'); }
}