import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeAppelsService {
    typeappelsDetailsUrl=environment.base_url+Constants.GetTypeAppelsDetailsUrl;
    typeappelsEditUrl=environment.base_url+Constants.GetTypeAppelsEditUrl;
    allTypeAppelsUrl=environment.base_url+Constants.GetAllTypeAppelsUrl;
    createTypeAppelsUrl=environment.base_url+Constants.CreateTypeAppelsUrl;
    updateTypeAppelsUrl=environment.base_url+Constants.CreateTypeAppelsUrl;

  constructor(private http: HttpClient) { }
  getTypeAppels(idTypeAppel:number):Observable<TypeAppelsDto> {
    let params = new HttpParams();
    params = params.append('idTypeAppel',idTypeAppel);
    return this.http.get<TypeAppelsDto>(this.typeappelsDetailsUrl,{params:params});
  }
  getEditTypeAppels(idTypeAppel:number):Observable<InputTypeAppelsDto> {
    let params = new HttpParams();
    params = params.append('idTypeAppel',idTypeAppel);
    return this.http.get<InputTypeAppelsDto>(this.typeappelsEditUrl,{params:params});
  }
  getAllTypeAppels():Observable<TypeAppelsDto[]> {
    return this.http.get<TypeAppelsDto[]>(this.allTypeAppelsUrl);
  }
  createTypeAppels(typeappels:InputTypeAppelsDto){
    return this.http.post<any>(this.createTypeAppelsUrl,typeappels);
  }
  updateTypeAppels(typeappels:InputTypeAppelsDto){
    return this.http.put<any>(this.updateTypeAppelsUrl,typeappels);
  }
}
export interface TypeAppelsDto{
    idTypeAppel:string
    teleoperateurs:string
    libelle_Type_Appel:number
    nbre_Annee:number

}
export interface InputTypeAppelsDto{
  idTypeAppel:string
  idTeleoperateur:string
  libelle_Type_Appel:number
  nbre_Annee:number

}

