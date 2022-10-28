import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { TrunkSIPService, InputTrunkSIPDto, TrunkSIPDto } from 'src/app/shared/services/trunksip.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-trunksip',
  templateUrl: './add-trunksip.component.html',
  styleUrls: ['./add-trunksip.component.scss']
})

export class AddTrunkSIPComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTrunkSIP: any = 0;
  trunksipDto: InputTrunkSIPDto | undefined;
  public trunksipGroup = new FormGroup({
    intitule : new FormControl('', [Validators.required]),
    nom_Utilisateur : new FormControl('', [Validators.required]),
    mdp : new FormControl('', [Validators.required]),
    domaine : new FormControl('', [Validators.required]),
    commentaire : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private trunksipService: TrunkSIPService,
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
  getTrunkSIP(idTrunkSIP: number) {
    this.trunksipService.getEditTrunkSIP(idTrunkSIP).subscribe(res => {
      this.trunksipDto = res;      
      this.domaine?.setValue(res.domaine);        
      this.etat?.setValue(res.etat);        
      this.mdp?.setValue(res.mdp);        
      this.intitule?.setValue(res.intitule);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.nom_Utilisateur?.setValue(res.nom_Utilisateur);        
      this.commentaire?.setValue(res.commentaire);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idTrunkSIP = Number(params.get('idTrunkSIP'));
      this.getTrunkSIP(this.idTrunkSIP);
    });
  }

  onSubmit() {
    this.trunksipGroup.markAllAsTouched();
    if (this.trunksipGroup.valid) { 
     if(this.idTrunkSIP>0){
      var trunksipDto: InputTrunkSIPDto = {
        idTrunksip: this.idTrunkSIP,        
        domaine: this.trunksipGroup.get('domaine')?.value,        
        etat: this.trunksipGroup.get('etat')?.value,        
        mdp: this.trunksipGroup.get('mdp')?.value,        
        intitule: this.trunksipGroup.get('intitule')?.value,        
        idTeleoperateur: this.trunksipGroup.get('teleoperateurs')?.value,        
        nom_Utilisateur: this.trunksipGroup.get('nom_Utilisateur')?.value,        
        commentaire: this.trunksipGroup.get('commentaire')?.value
      }

      this.trunksipService.updateTrunkSIP(trunksipDto).subscribe(res => {
        this.toastr.success('Create trunksip', 'Sucess');
      });
     }
     else{
      var trunksipDto: InputTrunkSIPDto = {
        idTrunksip: this.idTrunkSIP,        
        domaine: this.trunksipGroup.get('domaine')?.value,        
        etat: this.trunksipGroup.get('etat')?.value,        
        mdp: this.trunksipGroup.get('mdp')?.value,        
        intitule: this.trunksipGroup.get('intitule')?.value,        
        idTeleoperateur: this.trunksipGroup.get('teleoperateurs')?.value,        
        nom_Utilisateur: this.trunksipGroup.get('nom_Utilisateur')?.value,        
        commentaire: this.trunksipGroup.get('commentaire')?.value
      }

      this.trunksipService.createTrunkSIP(trunksipDto).subscribe(res => {
        this.toastr.success('Create trunksip', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get domaine() { return this.trunksipGroup.get('domaine'); }  
  get etat() { return this.trunksipGroup.get('etat'); }  
  get mdp() { return this.trunksipGroup.get('mdp'); }  
  get intitule() { return this.trunksipGroup.get('intitule'); }  
  get teleoperateurs() { return this.trunksipGroup.get('teleoperateurs'); }  
  get nom_Utilisateur() { return this.trunksipGroup.get('nom_Utilisateur'); }  
  get commentaire() { return this.trunksipGroup.get('commentaire'); }
}