import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendasService {
    agendasDetailsUrl=environment.base_url+Constants.GetAgendasDetailsUrl;
    agendasEditUrl=environment.base_url+Constants.GetAgendasEditUrl;
    allAgendasUrl=environment.base_url+Constants.GetAllAgendasUrl;
    createAgendasUrl=environment.base_url+Constants.CreateAgendasUrl;
    updateAgendasUrl=environment.base_url+Constants.CreateAgendasUrl;

  constructor(private http: HttpClient) { }
  getAgendas(idAgenda:number):Observable<AgendasDto> {
    let params = new HttpParams();
    params = params.append('idAgenda',idAgenda);
    return this.http.get<AgendasDto>(this.agendasDetailsUrl,{params:params});
  }
  getEditAgendas(idAgenda:number):Observable<InputAgendasDto> {
    let params = new HttpParams();
    params = params.append('idAgenda',idAgenda);
    return this.http.get<InputAgendasDto>(this.agendasEditUrl,{params:params});
  }
  getAllAgendas():Observable<AgendasDto[]> {
    return this.http.get<AgendasDto[]>(this.allAgendasUrl);
  }
  createAgendas(agendas:InputAgendasDto){
    return this.http.post<any>(this.createAgendasUrl,agendas);
  }
  updateAgendas(agendas:InputAgendasDto){
    return this.http.put<any>(this.updateAgendasUrl,agendas);
  }
}
export interface AgendasDto{
    idAgenda:string
    teleoperateurs:string
    jour:number
    heure:number

}
export interface InputAgendasDto{
  idAgenda:string
  idTeleoperateur:string
  jour:number
  heure:number

}

