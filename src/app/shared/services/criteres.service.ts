import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriteresService {
    criteresDetailsUrl=environment.base_url+Constants.GetCriteresDetailsUrl;
    criteresEditUrl=environment.base_url+Constants.GetCriteresEditUrl;
    allCriteresUrl=environment.base_url+Constants.GetAllCriteresUrl;
    createCriteresUrl=environment.base_url+Constants.CreateCriteresUrl;
    updateCriteresUrl=environment.base_url+Constants.CreateCriteresUrl;

  constructor(private http: HttpClient) { }
  getCriteres(idCritere:number):Observable<CriteresDto> {
    let params = new HttpParams();
    params = params.append('idCritere',idCritere);
    return this.http.get<CriteresDto>(this.criteresDetailsUrl,{params:params});
  }
  getEditCriteres(idCritere:number):Observable<InputCriteresDto> {
    let params = new HttpParams();
    params = params.append('idCritere',idCritere);
    return this.http.get<InputCriteresDto>(this.criteresEditUrl,{params:params});
  }
  getAllCriteres():Observable<CriteresDto[]> {
    return this.http.get<CriteresDto[]>(this.allCriteresUrl);
  }
  createCriteres(criteres:InputCriteresDto){
    return this.http.post<any>(this.createCriteresUrl,criteres);
  }
  updateCriteres(criteres:InputCriteresDto){
    return this.http.put<any>(this.updateCriteresUrl,criteres);
  }
}
export interface CriteresDto{
    idCritere:string
    missions:string
    libelle_Critere:string

}
export interface InputCriteresDto{
  idCritere:string
  idMission:string
  libelle_Critere:string

}

