import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Agendas__TeleoperateursService, InputAgendas__TeleoperateursDto, Agendas__TeleoperateursDto } from 'src/app/shared/services/agendas__teleoperateurs.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-agendas__teleoperateurs',
  templateUrl: './add-agendas__teleoperateurs.component.html',
  styleUrls: ['./add-agendas__teleoperateurs.component.scss']
})

export class AddAgendas__TeleoperateursComponent implements OnInit {
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idAgendaTeleoperateur: any = 0;
  agendas__teleoperateursDto: InputAgendas__TeleoperateursDto | undefined;
  public agendas__teleoperateursGroup = new FormGroup({
    nom : new FormControl('', [Validators.required]),
    pays : new FormControl('', [Validators.required]),
    synchronisation : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
              private agendas__teleoperateursService: Agendas__TeleoperateursService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
  }
  
  getAgendas__Teleoperateurs(idAgendaTeleoperateur: number) {
    this.agendas__teleoperateursService.getEditAgendas__Teleoperateurs(idAgendaTeleoperateur).subscribe(res => {
      this.agendas__teleoperateursDto = res;      
      this.synchronisation?.setValue(res.synchronisation);        
      this.missions?.setValue(res.idMission, { onlySelf: true });      
      this.pays?.setValue(res.pays);        
      this.nom?.setValue(res.nom);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });
    });    
  }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.idAgendaTeleoperateur = Number(params.get('idAgendaTeleoperateur'));
      this.getAgendas__Teleoperateurs(this.idAgendaTeleoperateur);
    });
  }

  onSubmit() {
    this.agendas__teleoperateursGroup.markAllAsTouched();
    if (this.agendas__teleoperateursGroup.valid) { 
     if(this.idAgendaTeleoperateur>0){
      var agendas__teleoperateursDto: InputAgendas__TeleoperateursDto = {
        idAgendaTeleoperateur: this.idAgendaTeleoperateur,        
        synchronisation: this.agendas__teleoperateursGroup.get('synchronisation')?.value,        
        idMission: this.agendas__teleoperateursGroup.get('missions')?.value,        
        pays: this.agendas__teleoperateursGroup.get('pays')?.value,        
        nom: this.agendas__teleoperateursGroup.get('nom')?.value,        
        idTeleoperateur: this.agendas__teleoperateursGroup.get('teleoperateurs')?.value
      }

      this.agendas__teleoperateursService.updateAgendas__Teleoperateurs(agendas__teleoperateursDto).subscribe(res => {
        this.toastr.success('Create agendas__teleoperateurs', 'Sucess');
      });
     }
     else{
      var agendas__teleoperateursDto: InputAgendas__TeleoperateursDto = {
        idAgendaTeleoperateur: this.idAgendaTeleoperateur,        
        synchronisation: this.agendas__teleoperateursGroup.get('synchronisation')?.value,        
        idMission: this.agendas__teleoperateursGroup.get('missions')?.value,        
        pays: this.agendas__teleoperateursGroup.get('pays')?.value,        
        nom: this.agendas__teleoperateursGroup.get('nom')?.value,        
        idTeleoperateur: this.agendas__teleoperateursGroup.get('teleoperateurs')?.value
      }

      this.agendas__teleoperateursService.createAgendas__Teleoperateurs(agendas__teleoperateursDto).subscribe(res => {
        this.toastr.success('Create agendas__teleoperateurs', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get synchronisation() { return this.agendas__teleoperateursGroup.get('synchronisation'); }  
  get missions() { return this.agendas__teleoperateursGroup.get('missions'); }  
  get pays() { return this.agendas__teleoperateursGroup.get('pays'); }  
  get nom() { return this.agendas__teleoperateursGroup.get('nom'); }  
  get teleoperateurs() { return this.agendas__teleoperateursGroup.get('teleoperateurs'); }
}