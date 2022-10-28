import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeMissionsService {
    typemissionsDetailsUrl=environment.base_url+Constants.GetTypeMissionsDetailsUrl;
    typemissionsEditUrl=environment.base_url+Constants.GetTypeMissionsEditUrl;
    allTypeMissionsUrl=environment.base_url+Constants.GetAllTypeMissionsUrl;
    createTypeMissionsUrl=environment.base_url+Constants.CreateTypeMissionsUrl;
    updateTypeMissionsUrl=environment.base_url+Constants.CreateTypeMissionsUrl;

  constructor(private http: HttpClient) { }
  getTypeMissions(idTypeMission:number):Observable<TypeMissionsDto> {
    let params = new HttpParams();
    params = params.append('idTypeMission',idTypeMission);
    return this.http.get<TypeMissionsDto>(this.typemissionsDetailsUrl,{params:params});
  }
  getEditTypeMissions(idTypeMission:number):Observable<InputTypeMissionsDto> {
    let params = new HttpParams();
    params = params.append('idTypeMission',idTypeMission);
    return this.http.get<InputTypeMissionsDto>(this.typemissionsEditUrl,{params:params});
  }
  getAllTypeMissions():Observable<TypeMissionsDto[]> {
    return this.http.get<TypeMissionsDto[]>(this.allTypeMissionsUrl);
  }
  createTypeMissions(typemissions:InputTypeMissionsDto){
    return this.http.post<any>(this.createTypeMissionsUrl,typemissions);
  }
  updateTypeMissions(typemissions:InputTypeMissionsDto){
    return this.http.put<any>(this.updateTypeMissionsUrl,typemissions);
  }
}
export interface TypeMissionsDto{
    idTypeMission:string
    teleoperateurs:string
    libelle_Type_Mission:number
    libelle_Type_Prospect:number
    type_Mission_Souhaitee:number

}
export interface InputTypeMissionsDto{
  idTypeMission:string
  idTeleoperateur:string
  libelle_Type_Mission:number
  libelle_Type_Prospect:number
  type_Mission_Souhaitee:number

}

