import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementsService {
    abonnementsDetailsUrl=environment.base_url+Constants.GetAbonnementsDetailsUrl;
    abonnementsEditUrl=environment.base_url+Constants.GetAbonnementsEditUrl;
    allAbonnementsUrl=environment.base_url+Constants.GetAllAbonnementsUrl;
    createAbonnementsUrl=environment.base_url+Constants.CreateAbonnementsUrl;
    updateAbonnementsUrl=environment.base_url+Constants.CreateAbonnementsUrl;

  constructor(private http: HttpClient) { }
  getAbonnements(idAbonnement:number):Observable<AbonnementsDto> {
    let params = new HttpParams();
    params = params.append('idAbonnement',idAbonnement);
    return this.http.get<AbonnementsDto>(this.abonnementsDetailsUrl,{params:params});
  }
  getEditAbonnements(idAbonnement:number):Observable<InputAbonnementsDto> {
    let params = new HttpParams();
    params = params.append('idAbonnement',idAbonnement);
    return this.http.get<InputAbonnementsDto>(this.abonnementsEditUrl,{params:params});
  }
  getAllAbonnements():Observable<AbonnementsDto[]> {
    return this.http.get<AbonnementsDto[]>(this.allAbonnementsUrl);
  }
  createAbonnements(abonnements:InputAbonnementsDto){
    return this.http.post<any>(this.createAbonnementsUrl,abonnements);
  }
  updateAbonnements(abonnements:InputAbonnementsDto){
    return this.http.put<any>(this.updateAbonnementsUrl,abonnements);
  }
}
export interface AbonnementsDto{
    idAbonnement:string
    teleoperateurs:string
    libelle_Abonnement:string
    prix:number
    periode_Engagement:number
    commission:number

}
export interface InputAbonnementsDto{
  idAbonnement:string
  idTeleoperateur:string
  libelle_Abonnement:string
  prix:number
  periode_Engagement:number
  commission:number

}

