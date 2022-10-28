import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrunkSIPService {
    trunksipDetailsUrl=environment.base_url+Constants.GetTrunkSIPDetailsUrl;
    trunksipEditUrl=environment.base_url+Constants.GetTrunkSIPEditUrl;
    allTrunkSIPUrl=environment.base_url+Constants.GetAllTrunkSIPUrl;
    createTrunkSIPUrl=environment.base_url+Constants.CreateTrunkSIPUrl;
    updateTrunkSIPUrl=environment.base_url+Constants.CreateTrunkSIPUrl;

  constructor(private http: HttpClient) { }
  getTrunkSIP(idTrunkSIP:number):Observable<TrunkSIPDto> {
    let params = new HttpParams();
    params = params.append('idTrunkSIP',idTrunkSIP);
    return this.http.get<TrunkSIPDto>(this.trunksipDetailsUrl,{params:params});
  }
  getEditTrunkSIP(idTrunkSIP:number):Observable<InputTrunkSIPDto> {
    let params = new HttpParams();
    params = params.append('idTrunkSIP',idTrunkSIP);
    return this.http.get<InputTrunkSIPDto>(this.trunksipEditUrl,{params:params});
  }
  getAllTrunkSIP():Observable<TrunkSIPDto[]> {
    return this.http.get<TrunkSIPDto[]>(this.allTrunkSIPUrl);
  }
  createTrunkSIP(trunksip:InputTrunkSIPDto){
    return this.http.post<any>(this.createTrunkSIPUrl,trunksip);
  }
  updateTrunkSIP(trunksip:InputTrunkSIPDto){
    return this.http.put<any>(this.updateTrunkSIPUrl,trunksip);
  }
}
export interface TrunkSIPDto{
    idTrunksip:string
    teleoperateurs:string
    intitule:string
    nom_Utilisateur:string
    mdp:string
    domaine:string
    commentaire:string
    etat:number

}
export interface InputTrunkSIPDto{
  idTrunksip:string
  idTeleoperateur:string
  intitule:string
  nom_Utilisateur:string
  mdp:string
  domaine:string
  commentaire:string
  etat:number

}

