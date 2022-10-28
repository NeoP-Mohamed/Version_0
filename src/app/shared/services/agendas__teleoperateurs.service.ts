import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Agendas__TeleoperateursService {
    agendas__teleoperateursDetailsUrl=environment.base_url+Constants.GetAgendas__TeleoperateursDetailsUrl;
    agendas__teleoperateursEditUrl=environment.base_url+Constants.GetAgendas__TeleoperateursEditUrl;
    allAgendas__TeleoperateursUrl=environment.base_url+Constants.GetAllAgendas__TeleoperateursUrl;
    createAgendas__TeleoperateursUrl=environment.base_url+Constants.CreateAgendas__TeleoperateursUrl;
    updateAgendas__TeleoperateursUrl=environment.base_url+Constants.CreateAgendas__TeleoperateursUrl;

  constructor(private http: HttpClient) { }
  getAgendas__Teleoperateurs(idAgendaTeleoperateur:number):Observable<Agendas__TeleoperateursDto> {
    let params = new HttpParams();
    params = params.append('idAgendaTeleoperateur',idAgendaTeleoperateur);
    return this.http.get<Agendas__TeleoperateursDto>(this.agendas__teleoperateursDetailsUrl,{params:params});
  }
  getEditAgendas__Teleoperateurs(idAgendaTeleoperateur:number):Observable<InputAgendas__TeleoperateursDto> {
    let params = new HttpParams();
    params = params.append('idAgendaTeleoperateur',idAgendaTeleoperateur);
    return this.http.get<InputAgendas__TeleoperateursDto>(this.agendas__teleoperateursEditUrl,{params:params});
  }
  getAllAgendas__Teleoperateurs():Observable<Agendas__TeleoperateursDto[]> {
    return this.http.get<Agendas__TeleoperateursDto[]>(this.allAgendas__TeleoperateursUrl);
  }
  createAgendas__Teleoperateurs(agendas__teleoperateurs:InputAgendas__TeleoperateursDto){
    return this.http.post<any>(this.createAgendas__TeleoperateursUrl,agendas__teleoperateurs);
  }
  updateAgendas__Teleoperateurs(agendas__teleoperateurs:InputAgendas__TeleoperateursDto){
    return this.http.put<any>(this.updateAgendas__TeleoperateursUrl,agendas__teleoperateurs);
  }
}
export interface Agendas__TeleoperateursDto{
    idAgendaTeleoperateur:string
    nom:string
    pays:string
    synchronisation:number
    missions:string
    teleoperateurs:string

}
export interface InputAgendas__TeleoperateursDto{
  idAgendaTeleoperateur:string
  nom:string
  pays:string
  synchronisation:number
  idMission:string
  idTeleoperateur:string

}

