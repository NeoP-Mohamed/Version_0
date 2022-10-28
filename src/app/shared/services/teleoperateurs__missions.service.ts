import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Teleoperateurs__MissionsService {
    teleoperateurs__missionsDetailsUrl=environment.base_url+Constants.GetTeleoperateurs__MissionsDetailsUrl;
    teleoperateurs__missionsEditUrl=environment.base_url+Constants.GetTeleoperateurs__MissionsEditUrl;
    allTeleoperateurs__MissionsUrl=environment.base_url+Constants.GetAllTeleoperateurs__MissionsUrl;
    createTeleoperateurs__MissionsUrl=environment.base_url+Constants.CreateTeleoperateurs__MissionsUrl;
    updateTeleoperateurs__MissionsUrl=environment.base_url+Constants.CreateTeleoperateurs__MissionsUrl;

  constructor(private http: HttpClient) { }
  getTeleoperateurs__Missions(idTeleoperateur_Mission:number):Observable<Teleoperateurs__MissionsDto> {
    let params = new HttpParams();
    params = params.append('idTeleoperateur_Mission',idTeleoperateur_Mission);
    return this.http.get<Teleoperateurs__MissionsDto>(this.teleoperateurs__missionsDetailsUrl,{params:params});
  }
  getEditTeleoperateurs__Missions(idTeleoperateur_Mission:number):Observable<InputTeleoperateurs__MissionsDto> {
    let params = new HttpParams();
    params = params.append('idTeleoperateur_Mission',idTeleoperateur_Mission);
    return this.http.get<InputTeleoperateurs__MissionsDto>(this.teleoperateurs__missionsEditUrl,{params:params});
  }
  getAllTeleoperateurs__Missions():Observable<Teleoperateurs__MissionsDto[]> {
    return this.http.get<Teleoperateurs__MissionsDto[]>(this.allTeleoperateurs__MissionsUrl);
  }
  createTeleoperateurs__Missions(teleoperateurs__missions:InputTeleoperateurs__MissionsDto){
    return this.http.post<any>(this.createTeleoperateurs__MissionsUrl,teleoperateurs__missions);
  }
  updateTeleoperateurs__Missions(teleoperateurs__missions:InputTeleoperateurs__MissionsDto){
    return this.http.put<any>(this.updateTeleoperateurs__MissionsUrl,teleoperateurs__missions);
  }
}
export interface Teleoperateurs__MissionsDto{
    idTeleoperateur_Mission:string
    teleoperateurs:string
    missions:string

}
export interface InputTeleoperateurs__MissionsDto{
  idTeleoperateur_Mission:string
  idTeleoperateur:string
  idMission:string

}

