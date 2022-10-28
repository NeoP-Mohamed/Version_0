import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {
    optionsDetailsUrl=environment.base_url+Constants.GetOptionsDetailsUrl;
    optionsEditUrl=environment.base_url+Constants.GetOptionsEditUrl;
    allOptionsUrl=environment.base_url+Constants.GetAllOptionsUrl;
    createOptionsUrl=environment.base_url+Constants.CreateOptionsUrl;
    updateOptionsUrl=environment.base_url+Constants.CreateOptionsUrl;

  constructor(private http: HttpClient) { }
  getOptions(idOption:number):Observable<OptionsDto> {
    let params = new HttpParams();
    params = params.append('idOption',idOption);
    return this.http.get<OptionsDto>(this.optionsDetailsUrl,{params:params});
  }
  getEditOptions(idOption:number):Observable<InputOptionsDto> {
    let params = new HttpParams();
    params = params.append('idOption',idOption);
    return this.http.get<InputOptionsDto>(this.optionsEditUrl,{params:params});
  }
  getAllOptions():Observable<OptionsDto[]> {
    return this.http.get<OptionsDto[]>(this.allOptionsUrl);
  }
  createOptions(options:InputOptionsDto){
    return this.http.post<any>(this.createOptionsUrl,options);
  }
  updateOptions(options:InputOptionsDto){
    return this.http.put<any>(this.updateOptionsUrl,options);
  }
}
export interface OptionsDto{
    idOption:string
    abonnements:string
    libelle_Option:string
    description:string

}
export interface InputOptionsDto{
  idOption:string
  idAbonnement:string
  libelle_Option:string
  description:string

}

