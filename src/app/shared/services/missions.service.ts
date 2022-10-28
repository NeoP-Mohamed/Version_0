import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
    missionsDetailsUrl=environment.base_url+Constants.GetMissionsDetailsUrl;
    missionsEditUrl=environment.base_url+Constants.GetMissionsEditUrl;
    allMissionsUrl=environment.base_url+Constants.GetAllMissionsUrl;
    createMissionsUrl=environment.base_url+Constants.CreateMissionsUrl;
    updateMissionsUrl=environment.base_url+Constants.CreateMissionsUrl;

  constructor(private http: HttpClient) { }
  getMissions(idMission:number):Observable<MissionsDto> {
    let params = new HttpParams();
    params = params.append('idMission',idMission);
    return this.http.get<MissionsDto>(this.missionsDetailsUrl,{params:params});
  }
  getEditMissions(idMission:number):Observable<InputMissionsDto> {
    let params = new HttpParams();
    params = params.append('idMission',idMission);
    return this.http.get<InputMissionsDto>(this.missionsEditUrl,{params:params});
  }
  getAllMissions():Observable<MissionsDto[]> {
    return this.http.get<MissionsDto[]>(this.allMissionsUrl);
  }
  createMissions(missions:InputMissionsDto){
    return this.http.post<any>(this.createMissionsUrl,missions);
  }
  updateMissions(missions:InputMissionsDto){
    return this.http.put<any>(this.updateMissionsUrl,missions);
  }
}
export interface MissionsDto{
    idMission:string
    societes:string
    numero:string
    visibilite_Mission:number
    nom_Mission:string
    type_Prospects:number
    type_Fichier:number
    pastille_Couleur:string
    besoin:number
    nbre_rdV_Mission:number
    rendez_Vous:number
    description:string
    script_Appel:string
    nbre_rdV_Teleoperateur:number
    budget:number
    duree_rdv:number
    unite_Duree_rdv:number
    nbre_Jour_Publication:number
    date_Debut_Mission:Date

}
export interface InputMissionsDto{
  idMission:string
  idSociete:string
  numero:string
  visibilite_Mission:number
  nom_Mission:string
  type_Prospects:number
  type_Fichier:number
  pastille_Couleur:string
  besoin:number
  nbre_rdV_Mission:number
  rendez_Vous:number
  description:string
  script_Appel:string
  nbre_rdV_Teleoperateur:number
  budget:number
  duree_rdv:number
  unite_Duree_rdv:number
  nbre_Jour_Publication:number
  date_Debut_Mission:Date

}

