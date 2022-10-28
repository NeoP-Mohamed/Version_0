import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
    avisDetailsUrl=environment.base_url+Constants.GetAvisDetailsUrl;
    avisEditUrl=environment.base_url+Constants.GetAvisEditUrl;
    allAvisUrl=environment.base_url+Constants.GetAllAvisUrl;
    createAvisUrl=environment.base_url+Constants.CreateAvisUrl;
    updateAvisUrl=environment.base_url+Constants.CreateAvisUrl;

  constructor(private http: HttpClient) { }
  getAvis(idAvis:number):Observable<AvisDto> {
    let params = new HttpParams();
    params = params.append('idAvis',idAvis);
    return this.http.get<AvisDto>(this.avisDetailsUrl,{params:params});
  }
  getEditAvis(idAvis:number):Observable<InputAvisDto> {
    let params = new HttpParams();
    params = params.append('idAvis',idAvis);
    return this.http.get<InputAvisDto>(this.avisEditUrl,{params:params});
  }
  getAllAvis():Observable<AvisDto[]> {
    return this.http.get<AvisDto[]>(this.allAvisUrl);
  }
  createAvis(avis:InputAvisDto){
    return this.http.post<any>(this.createAvisUrl,avis);
  }
  updateAvis(avis:InputAvisDto){
    return this.http.put<any>(this.updateAvisUrl,avis);
  }
}
export interface AvisDto{
    idAvis:string
    teleoperateurs:string
    societes:string
    missions:string
    note:number
    commentaire:string

}
export interface InputAvisDto{
  idAvis:string
  idTeleoperateur:string
  idSociete:string
  idMission:string
  note:number
  commentaire:string

}

