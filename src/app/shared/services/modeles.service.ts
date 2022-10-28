import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelesService {
    modelesDetailsUrl=environment.base_url+Constants.GetModelesDetailsUrl;
    modelesEditUrl=environment.base_url+Constants.GetModelesEditUrl;
    allModelesUrl=environment.base_url+Constants.GetAllModelesUrl;
    createModelesUrl=environment.base_url+Constants.CreateModelesUrl;
    updateModelesUrl=environment.base_url+Constants.CreateModelesUrl;

  constructor(private http: HttpClient) { }
  getModeles(idModele:number):Observable<ModelesDto> {
    let params = new HttpParams();
    params = params.append('idModele',idModele);
    return this.http.get<ModelesDto>(this.modelesDetailsUrl,{params:params});
  }
  getEditModeles(idModele:number):Observable<InputModelesDto> {
    let params = new HttpParams();
    params = params.append('idModele',idModele);
    return this.http.get<InputModelesDto>(this.modelesEditUrl,{params:params});
  }
  getAllModeles():Observable<ModelesDto[]> {
    return this.http.get<ModelesDto[]>(this.allModelesUrl);
  }
  createModeles(modeles:InputModelesDto){
    return this.http.post<any>(this.createModelesUrl,modeles);
  }
  updateModeles(modeles:InputModelesDto){
    return this.http.put<any>(this.updateModelesUrl,modeles);
  }
}
export interface ModelesDto{
    idModele:string
    missions:string
    teleoperateurs:string
    type_Modele:number
    dateCreation_Modele:Date
    titre:string
    description:string

}
export interface InputModelesDto{
  idModele:string
  idMission:string
  idTeleoperateur:string
  type_Modele:number
  dateCreation_Modele:Date
  titre:string
  description:string

}

