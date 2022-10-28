import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Moyens__PaiementService {
    moyens__paiementDetailsUrl=environment.base_url+Constants.GetMoyens__PaiementDetailsUrl;
    moyens__paiementEditUrl=environment.base_url+Constants.GetMoyens__PaiementEditUrl;
    allMoyens__PaiementUrl=environment.base_url+Constants.GetAllMoyens__PaiementUrl;
    createMoyens__PaiementUrl=environment.base_url+Constants.CreateMoyens__PaiementUrl;
    updateMoyens__PaiementUrl=environment.base_url+Constants.CreateMoyens__PaiementUrl;

  constructor(private http: HttpClient) { }
  getMoyens__Paiement(idMoyens_Paiement:number):Observable<Moyens__PaiementDto> {
    let params = new HttpParams();
    params = params.append('idMoyens_Paiement',idMoyens_Paiement);
    return this.http.get<Moyens__PaiementDto>(this.moyens__paiementDetailsUrl,{params:params});
  }
  getEditMoyens__Paiement(idMoyens_Paiement:number):Observable<InputMoyens__PaiementDto> {
    let params = new HttpParams();
    params = params.append('idMoyens_Paiement',idMoyens_Paiement);
    return this.http.get<InputMoyens__PaiementDto>(this.moyens__paiementEditUrl,{params:params});
  }
  getAllMoyens__Paiement():Observable<Moyens__PaiementDto[]> {
    return this.http.get<Moyens__PaiementDto[]>(this.allMoyens__PaiementUrl);
  }
  createMoyens__Paiement(moyens__paiement:InputMoyens__PaiementDto){
    return this.http.post<any>(this.createMoyens__PaiementUrl,moyens__paiement);
  }
  updateMoyens__Paiement(moyens__paiement:InputMoyens__PaiementDto){
    return this.http.put<any>(this.updateMoyens__PaiementUrl,moyens__paiement);
  }
}
export interface Moyens__PaiementDto{
    idMoyens_Paiement:string
    teleoperateurs:string
    intitule:string
    numero_Carte:string
    date_Ajout:Date
    date_Expiration:Date
    cryptogramme:string
    etat:string

}
export interface InputMoyens__PaiementDto{
  idMoyens_Paiement:string
  idTeleoperateur:string
  intitule:string
  numero_Carte:string
  date_Ajout:Date
  date_Expiration:Date
  cryptogramme:string
  etat:string

}

