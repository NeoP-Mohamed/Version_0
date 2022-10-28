import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Etats__AppelService {
    etats__appelDetailsUrl=environment.base_url+Constants.GetEtats__AppelDetailsUrl;
    etats__appelEditUrl=environment.base_url+Constants.GetEtats__AppelEditUrl;
    allEtats__AppelUrl=environment.base_url+Constants.GetAllEtats__AppelUrl;
    createEtats__AppelUrl=environment.base_url+Constants.CreateEtats__AppelUrl;
    updateEtats__AppelUrl=environment.base_url+Constants.CreateEtats__AppelUrl;

  constructor(private http: HttpClient) { }
  getEtats__Appel(idEtatAppel:number):Observable<Etats__AppelDto> {
    let params = new HttpParams();
    params = params.append('idEtatAppel',idEtatAppel);
    return this.http.get<Etats__AppelDto>(this.etats__appelDetailsUrl,{params:params});
  }
  getEditEtats__Appel(idEtatAppel:number):Observable<InputEtats__AppelDto> {
    let params = new HttpParams();
    params = params.append('idEtatAppel',idEtatAppel);
    return this.http.get<InputEtats__AppelDto>(this.etats__appelEditUrl,{params:params});
  }
  getAllEtats__Appel():Observable<Etats__AppelDto[]> {
    return this.http.get<Etats__AppelDto[]>(this.allEtats__AppelUrl);
  }
  createEtats__Appel(etats__appel:InputEtats__AppelDto){
    return this.http.post<any>(this.createEtats__AppelUrl,etats__appel);
  }
  updateEtats__Appel(etats__appel:InputEtats__AppelDto){
    return this.http.put<any>(this.updateEtats__AppelUrl,etats__appel);
  }
}
export interface Etats__AppelDto{
    idEtatAppel:string
    teleoperateurs:string
    nom:string
    type_Etat:number
    pastille:string
    type_Mission:number
    fichier_Cible:number

}
export interface InputEtats__AppelDto{
  idEtatAppel:string
  idTeleoperateur:string
  nom:string
  type_Etat:number
  pastille:string
  type_Mission:number
  fichier_Cible:number

}

