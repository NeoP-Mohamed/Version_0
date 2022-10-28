import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Etats__ValidationService {
    etats__validationDetailsUrl=environment.base_url+Constants.GetEtats__ValidationDetailsUrl;
    etats__validationEditUrl=environment.base_url+Constants.GetEtats__ValidationEditUrl;
    allEtats__ValidationUrl=environment.base_url+Constants.GetAllEtats__ValidationUrl;
    createEtats__ValidationUrl=environment.base_url+Constants.CreateEtats__ValidationUrl;
    updateEtats__ValidationUrl=environment.base_url+Constants.CreateEtats__ValidationUrl;

  constructor(private http: HttpClient) { }
  getEtats__Validation(idEtatValidation:number):Observable<Etats__ValidationDto> {
    let params = new HttpParams();
    params = params.append('idEtatValidation',idEtatValidation);
    return this.http.get<Etats__ValidationDto>(this.etats__validationDetailsUrl,{params:params});
  }
  getEditEtats__Validation(idEtatValidation:number):Observable<InputEtats__ValidationDto> {
    let params = new HttpParams();
    params = params.append('idEtatValidation',idEtatValidation);
    return this.http.get<InputEtats__ValidationDto>(this.etats__validationEditUrl,{params:params});
  }
  getAllEtats__Validation():Observable<Etats__ValidationDto[]> {
    return this.http.get<Etats__ValidationDto[]>(this.allEtats__ValidationUrl);
  }
  createEtats__Validation(etats__validation:InputEtats__ValidationDto){
    return this.http.post<any>(this.createEtats__ValidationUrl,etats__validation);
  }
  updateEtats__Validation(etats__validation:InputEtats__ValidationDto){
    return this.http.put<any>(this.updateEtats__ValidationUrl,etats__validation);
  }
}
export interface Etats__ValidationDto{
    idEtatValidation:string
    teleoperateurs:string
    nom:string
    pastille:string
    action:number

}
export interface InputEtats__ValidationDto{
  idEtatValidation:string
  idTeleoperateur:string
  nom:string
  pastille:string
  action:number

}

