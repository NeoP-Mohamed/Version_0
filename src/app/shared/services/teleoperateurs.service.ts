import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeleoperateursService {
    teleoperateursDetailsUrl=environment.base_url+Constants.GetTeleoperateursDetailsUrl;
    teleoperateursEditUrl=environment.base_url+Constants.GetTeleoperateursEditUrl;
    allTeleoperateursUrl=environment.base_url+Constants.GetAllTeleoperateursUrl;
    createTeleoperateursUrl=environment.base_url+Constants.CreateTeleoperateursUrl;
    updateTeleoperateursUrl=environment.base_url+Constants.CreateTeleoperateursUrl;

  constructor(private http: HttpClient) { }
  getTeleoperateurs(idTeleoperateur:number):Observable<TeleoperateursDto> {
    let params = new HttpParams();
    params = params.append('idTeleoperateur',idTeleoperateur);
    return this.http.get<TeleoperateursDto>(this.teleoperateursDetailsUrl,{params:params});
  }
  getEditTeleoperateurs(idTeleoperateur:number):Observable<InputTeleoperateursDto> {
    let params = new HttpParams();
    params = params.append('idTeleoperateur',idTeleoperateur);
    return this.http.get<InputTeleoperateursDto>(this.teleoperateursEditUrl,{params:params});
  }
  getAllTeleoperateurs():Observable<TeleoperateursDto[]> {
    return this.http.get<TeleoperateursDto[]>(this.allTeleoperateursUrl);
  }
  createTeleoperateurs(teleoperateurs:InputTeleoperateursDto){
    return this.http.post<any>(this.createTeleoperateursUrl,teleoperateurs);
  }
  updateTeleoperateurs(teleoperateurs:InputTeleoperateursDto){
    return this.http.put<any>(this.updateTeleoperateursUrl,teleoperateurs);
  }
}
export interface TeleoperateursDto{
    idTeleoperateur:string
    civilite:number
    nom:string
    prenom:string
    date_de_naissance:Date
    nom_Societe:string
    nom_d_utilisateur:string
    email:string
    mot_de_passe:string
    code_Parainnage:string
    comment_connu:number
    statut:number
    pays:number
    matricule:string
    photo_Matricule:string
    numero_tva:string
    adresse:string
    cp:string
    ville:string
    tel_Portable:string
    tel_Fixe:string
    voix:string
    presentation:string
    photo_Profil:string
    type_Connexion:number
    debit:number
    bilan:string

}
export interface InputTeleoperateursDto{
  idTeleoperateur:string
  civilite:number
  nom:string
  prenom:string
  date_de_naissance:Date
  nom_Societe:string
  nom_d_utilisateur:string
  email:string
  mot_de_passe:string
  code_Parainnage:string
  comment_connu:number
  statut:number
  pays:number
  matricule:string
  photo_Matricule:string
  numero_tva:string
  adresse:string
  cp:string
  ville:string
  tel_Portable:string
  tel_Fixe:string
  voix:string
  presentation:string
  photo_Profil:string
  type_Connexion:number
  debit:number
  bilan:string

}

