import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocietesService {
    societesDetailsUrl=environment.base_url+Constants.GetSocietesDetailsUrl;
    societesEditUrl=environment.base_url+Constants.GetSocietesEditUrl;
    allSocietesUrl=environment.base_url+Constants.GetAllSocietesUrl;
    createSocietesUrl=environment.base_url+Constants.CreateSocietesUrl;
    updateSocietesUrl=environment.base_url+Constants.CreateSocietesUrl;

  constructor(private http: HttpClient) { }
  getSocietes(idSociete:number):Observable<SocietesDto> {
    let params = new HttpParams();
    params = params.append('idSociete',idSociete);
    return this.http.get<SocietesDto>(this.societesDetailsUrl,{params:params});
  }
  getEditSocietes(idSociete:number):Observable<InputSocietesDto> {
    let params = new HttpParams();
    params = params.append('idSociete',idSociete);
    return this.http.get<InputSocietesDto>(this.societesEditUrl,{params:params});
  }
  getAllSocietes():Observable<SocietesDto[]> {
    return this.http.get<SocietesDto[]>(this.allSocietesUrl);
  }
  createSocietes(societes:InputSocietesDto){
    return this.http.post<any>(this.createSocietesUrl,societes);
  }
  updateSocietes(societes:InputSocietesDto){
    return this.http.put<any>(this.updateSocietesUrl,societes);
  }
}
export interface SocietesDto{
    idSociete:string
    civilite:number
    nom:string
    prenom:string
    date_de_naissance:Date
    nom_Societe:string
    fonction:string
    nom_d_utilisateur:string
    email:string
    mot_de_passe:string
    code_Parainnage:string
    comment_connu:number
    photo_Profil:string
    statut:number
    pays:number
    matricule:string
    numero_tva:string
    adresse:string
    cp:string
    ville:string
    tel_Portable:string
    tel_Fixe:string
    domaine_Activite:number

}
export interface InputSocietesDto{
  idSociete:string
  civilite:number
  nom:string
  prenom:string
  date_de_naissance:Date
  nom_Societe:string
  fonction:string
  nom_d_utilisateur:string
  email:string
  mot_de_passe:string
  code_Parainnage:string
  comment_connu:number
  photo_Profil:string
  statut:number
  pays:number
  matricule:string
  numero_tva:string
  adresse:string
  cp:string
  ville:string
  tel_Portable:string
  tel_Fixe:string
  domaine_Activite:number

}

