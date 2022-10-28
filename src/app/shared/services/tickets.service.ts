import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
    ticketsDetailsUrl=environment.base_url+Constants.GetTicketsDetailsUrl;
    ticketsEditUrl=environment.base_url+Constants.GetTicketsEditUrl;
    allTicketsUrl=environment.base_url+Constants.GetAllTicketsUrl;
    createTicketsUrl=environment.base_url+Constants.CreateTicketsUrl;
    updateTicketsUrl=environment.base_url+Constants.CreateTicketsUrl;

  constructor(private http: HttpClient) { }
  getTickets(idTicket:number):Observable<TicketsDto> {
    let params = new HttpParams();
    params = params.append('idTicket',idTicket);
    return this.http.get<TicketsDto>(this.ticketsDetailsUrl,{params:params});
  }
  getEditTickets(idTicket:number):Observable<InputTicketsDto> {
    let params = new HttpParams();
    params = params.append('idTicket',idTicket);
    return this.http.get<InputTicketsDto>(this.ticketsEditUrl,{params:params});
  }
  getAllTickets():Observable<TicketsDto[]> {
    return this.http.get<TicketsDto[]>(this.allTicketsUrl);
  }
  createTickets(tickets:InputTicketsDto){
    return this.http.post<any>(this.createTicketsUrl,tickets);
  }
  updateTickets(tickets:InputTicketsDto){
    return this.http.put<any>(this.updateTicketsUrl,tickets);
  }
}
export interface TicketsDto{
    idTicket:string
    numero:string
    etat:number
    intitule_Ticket:string
    categorie_Ticket:number
    mission_Concerne:number
    message:string
    photo:string
    dateCreation_Ticket:Date
    dateCloture_Ticket:Date
    evalution:number
    teleoperateurs:string

}
export interface InputTicketsDto{
  idTicket:string
  numero:string
  etat:number
  intitule_Ticket:string
  categorie_Ticket:number
  mission_Concerne:number
  message:string
  photo:string
  dateCreation_Ticket:Date
  dateCloture_Ticket:Date
  evalution:number
  idTeleoperateur:string

}

