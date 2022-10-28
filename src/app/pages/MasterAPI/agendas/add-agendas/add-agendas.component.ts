import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { AgendasService, InputAgendasDto, AgendasDto } from 'src/app/shared/services/agendas.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-agendas',
  templateUrl: './add-agendas.component.html',
  styleUrls: ['./add-agendas.component.scss']
})

export class AddAgendasComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idAgenda: any = 0;
  agendasDto: InputAgendasDto | undefined;
  public agendasGroup = new FormGroup({
    teleoperateurs : new FormControl('', [Validators.required]),
    jour : new FormControl('', [Validators.required]),
    heure : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private agendasService: AgendasService,
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
  getAgendas(idAgenda: number) {
    this.agendasService.getEditAgendas(idAgenda).subscribe(res => {
      this.agendasDto = res;      
      this.heure?.setValue(res.heure);        
      this.jour?.setValue(res.jour);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idAgenda = Number(params.get('idAgenda'));
      this.getAgendas(this.idAgenda);
    });
  }

  onSubmit() {
    this.agendasGroup.markAllAsTouched();
    if (this.agendasGroup.valid) { 
     if(this.idAgenda>0){
      var agendasDto: InputAgendasDto = {
        idAgenda: this.idAgenda,        
        heure: this.agendasGroup.get('heure')?.value,        
        jour: this.agendasGroup.get('jour')?.value,        
        idTeleoperateur: this.agendasGroup.get('teleoperateurs')?.value
      }

      this.agendasService.updateAgendas(agendasDto).subscribe(res => {
        this.toastr.success('Create agendas', 'Sucess');
      });
     }
     else{
      var agendasDto: InputAgendasDto = {
        idAgenda: this.idAgenda,        
        heure: this.agendasGroup.get('heure')?.value,        
        jour: this.agendasGroup.get('jour')?.value,        
        idTeleoperateur: this.agendasGroup.get('teleoperateurs')?.value
      }

      this.agendasService.createAgendas(agendasDto).subscribe(res => {
        this.toastr.success('Create agendas', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get heure() { return this.agendasGroup.get('heure'); }  
  get jour() { return this.agendasGroup.get('jour'); }  
  get teleoperateurs() { return this.agendasGroup.get('teleoperateurs'); }
}