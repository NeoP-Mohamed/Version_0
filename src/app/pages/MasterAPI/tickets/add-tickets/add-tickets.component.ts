import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { TicketsService, InputTicketsDto, TicketsDto } from 'src/app/shared/services/tickets.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-tickets',
  templateUrl: './add-tickets.component.html',
  styleUrls: ['./add-tickets.component.scss']
})

export class AddTicketsComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTicket: any = 0;
  ticketsDto: InputTicketsDto | undefined;
  public ticketsGroup = new FormGroup({
    categorie_Ticket : new FormControl('', [Validators.required]),
    mission_Concerne : new FormControl('', [Validators.required]),
    intitule_Ticket : new FormControl('', [Validators.required]),
    message : new FormControl('', [Validators.required]),
    photo : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private ticketsService: TicketsService,
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
  getTickets(idTicket: number) {
    this.ticketsService.getEditTickets(idTicket).subscribe(res => {
      this.ticketsDto = res;      
      this.dateCloture_Ticket?.setValue(res.dateCloture_Ticket);        
      this.etat?.setValue(res.etat);        
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.evalution?.setValue(res.evalution);        
      this.dateCreation_Ticket?.setValue(res.dateCreation_Ticket);        
      this.message?.setValue(res.message);        
      this.intitule_Ticket?.setValue(res.intitule_Ticket);        
      this.mission_Concerne?.setValue(res.mission_Concerne);        
      this.photo?.setValue(res.photo);        
      this.categorie_Ticket?.setValue(res.categorie_Ticket);        
      this.numero?.setValue(res.numero);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idTicket = Number(params.get('idTicket'));
      this.getTickets(this.idTicket);
    });
  }

  onSubmit() {
    this.ticketsGroup.markAllAsTouched();
    if (this.ticketsGroup.valid) { 
     if(this.idTicket>0){
      var ticketsDto: InputTicketsDto = {
        idTicket: this.idTicket,        
        dateCloture_Ticket: this.ticketsGroup.get('dateCloture_Ticket')?.value,        
        etat: this.ticketsGroup.get('etat')?.value,        
        idTeleoperateur: this.ticketsGroup.get('teleoperateurs')?.value,        
        evalution: this.ticketsGroup.get('evalution')?.value,        
        dateCreation_Ticket: this.ticketsGroup.get('dateCreation_Ticket')?.value,        
        message: this.ticketsGroup.get('message')?.value,        
        intitule_Ticket: this.ticketsGroup.get('intitule_Ticket')?.value,        
        mission_Concerne: this.ticketsGroup.get('mission_Concerne')?.value,        
        photo: this.ticketsGroup.get('photo')?.value,        
        categorie_Ticket: this.ticketsGroup.get('categorie_Ticket')?.value,        
        numero: this.ticketsGroup.get('numero')?.value
      }

      this.ticketsService.updateTickets(ticketsDto).subscribe(res => {
        this.toastr.success('Create tickets', 'Sucess');
      });
     }
     else{
      var ticketsDto: InputTicketsDto = {
        idTicket: this.idTicket,        
        dateCloture_Ticket: this.ticketsGroup.get('dateCloture_Ticket')?.value,        
        etat: this.ticketsGroup.get('etat')?.value,        
        idTeleoperateur: this.ticketsGroup.get('teleoperateurs')?.value,        
        evalution: this.ticketsGroup.get('evalution')?.value,        
        dateCreation_Ticket: this.ticketsGroup.get('dateCreation_Ticket')?.value,        
        message: this.ticketsGroup.get('message')?.value,        
        intitule_Ticket: this.ticketsGroup.get('intitule_Ticket')?.value,        
        mission_Concerne: this.ticketsGroup.get('mission_Concerne')?.value,        
        photo: this.ticketsGroup.get('photo')?.value,        
        categorie_Ticket: this.ticketsGroup.get('categorie_Ticket')?.value,        
        numero: this.ticketsGroup.get('numero')?.value
      }

      this.ticketsService.createTickets(ticketsDto).subscribe(res => {
        this.toastr.success('Create tickets', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get dateCloture_Ticket() { return this.ticketsGroup.get('dateCloture_Ticket'); }  
  get etat() { return this.ticketsGroup.get('etat'); }  
  get teleoperateurs() { return this.ticketsGroup.get('teleoperateurs'); }  
  get evalution() { return this.ticketsGroup.get('evalution'); }  
  get dateCreation_Ticket() { return this.ticketsGroup.get('dateCreation_Ticket'); }  
  get message() { return this.ticketsGroup.get('message'); }  
  get intitule_Ticket() { return this.ticketsGroup.get('intitule_Ticket'); }  
  get mission_Concerne() { return this.ticketsGroup.get('mission_Concerne'); }  
  get photo() { return this.ticketsGroup.get('photo'); }  
  get categorie_Ticket() { return this.ticketsGroup.get('categorie_Ticket'); }  
  get numero() { return this.ticketsGroup.get('numero'); }
}