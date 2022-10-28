import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContratsService {
    contratsDetailsUrl=environment.base_url+Constants.GetContratsDetailsUrl;
    contratsEditUrl=environment.base_url+Constants.GetContratsEditUrl;
    allContratsUrl=environment.base_url+Constants.GetAllContratsUrl;
    createContratsUrl=environment.base_url+Constants.CreateContratsUrl;
    updateContratsUrl=environment.base_url+Constants.CreateContratsUrl;

  constructor(private http: HttpClient) { }
  getContrats(idContrat:number):Observable<ContratsDto> {
    let params = new HttpParams();
    params = params.append('idContrat',idContrat);
    return this.http.get<ContratsDto>(this.contratsDetailsUrl,{params:params});
  }
  getEditContrats(idContrat:number):Observable<InputContratsDto> {
    let params = new HttpParams();
    params = params.append('idContrat',idContrat);
    return this.http.get<InputContratsDto>(this.contratsEditUrl,{params:params});
  }
  getAllContrats():Observable<ContratsDto[]> {
    return this.http.get<ContratsDto[]>(this.allContratsUrl);
  }
  createContrats(contrats:InputContratsDto){
    return this.http.post<any>(this.createContratsUrl,contrats);
  }
  updateContrats(contrats:InputContratsDto){
    return this.http.put<any>(this.updateContratsUrl,contrats);
  }
}
export interface ContratsDto{
    idContrat:string
    teleoperateurs:string
    numero:string
    date_Signature:Date
    contrat:string

}
export interface InputContratsDto{
  idContrat:string
  idTeleoperateur:string
  numero:string
  date_Signature:Date
  contrat:string

}

