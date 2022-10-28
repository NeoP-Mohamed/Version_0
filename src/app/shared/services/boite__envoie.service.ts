import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Boite__EnvoieService {
    boite__envoieDetailsUrl=environment.base_url+Constants.GetBoite__EnvoieDetailsUrl;
    boite__envoieEditUrl=environment.base_url+Constants.GetBoite__EnvoieEditUrl;
    allBoite__EnvoieUrl=environment.base_url+Constants.GetAllBoite__EnvoieUrl;
    createBoite__EnvoieUrl=environment.base_url+Constants.CreateBoite__EnvoieUrl;
    updateBoite__EnvoieUrl=environment.base_url+Constants.CreateBoite__EnvoieUrl;

  constructor(private http: HttpClient) { }
  getBoite__Envoie(idBoiteEnvoie:number):Observable<Boite__EnvoieDto> {
    let params = new HttpParams();
    params = params.append('idBoiteEnvoie',idBoiteEnvoie);
    return this.http.get<Boite__EnvoieDto>(this.boite__envoieDetailsUrl,{params:params});
  }
  getEditBoite__Envoie(idBoiteEnvoie:number):Observable<InputBoite__EnvoieDto> {
    let params = new HttpParams();
    params = params.append('idBoiteEnvoie',idBoiteEnvoie);
    return this.http.get<InputBoite__EnvoieDto>(this.boite__envoieEditUrl,{params:params});
  }
  getAllBoite__Envoie():Observable<Boite__EnvoieDto[]> {
    return this.http.get<Boite__EnvoieDto[]>(this.allBoite__EnvoieUrl);
  }
  createBoite__Envoie(boite__envoie:InputBoite__EnvoieDto){
    return this.http.post<any>(this.createBoite__EnvoieUrl,boite__envoie);
  }
  updateBoite__Envoie(boite__envoie:InputBoite__EnvoieDto){
    return this.http.put<any>(this.updateBoite__EnvoieUrl,boite__envoie);
  }
}
export interface Boite__EnvoieDto{
    idBoiteEnvoie:string
    teleoperateurs:string
    titre:string
    email:string
    identifiant:string
    mdp:string
    serveur_smtp:string
    port_smtp:string
    securite:number
    etat:number
    dateCreation_Boite:Date

}
export interface InputBoite__EnvoieDto{
  idBoiteEnvoie:string
  idTeleoperateur:string
  titre:string
  email:string
  identifiant:string
  mdp:string
  serveur_smtp:string
  port_smtp:string
  securite:number
  etat:number
  dateCreation_Boite:Date

}

