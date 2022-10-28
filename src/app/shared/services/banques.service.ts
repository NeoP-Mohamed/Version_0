import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanquesService {
    banquesDetailsUrl=environment.base_url+Constants.GetBanquesDetailsUrl;
    banquesEditUrl=environment.base_url+Constants.GetBanquesEditUrl;
    allBanquesUrl=environment.base_url+Constants.GetAllBanquesUrl;
    createBanquesUrl=environment.base_url+Constants.CreateBanquesUrl;
    updateBanquesUrl=environment.base_url+Constants.CreateBanquesUrl;

  constructor(private http: HttpClient) { }
  getBanques(idBanque:number):Observable<BanquesDto> {
    let params = new HttpParams();
    params = params.append('idBanque',idBanque);
    return this.http.get<BanquesDto>(this.banquesDetailsUrl,{params:params});
  }
  getEditBanques(idBanque:number):Observable<InputBanquesDto> {
    let params = new HttpParams();
    params = params.append('idBanque',idBanque);
    return this.http.get<InputBanquesDto>(this.banquesEditUrl,{params:params});
  }
  getAllBanques():Observable<BanquesDto[]> {
    return this.http.get<BanquesDto[]>(this.allBanquesUrl);
  }
  createBanques(banques:InputBanquesDto){
    return this.http.post<any>(this.createBanquesUrl,banques);
  }
  updateBanques(banques:InputBanquesDto){
    return this.http.put<any>(this.updateBanquesUrl,banques);
  }
}
export interface BanquesDto{
    idBanque:string
    teleoperateurs:string
    type:number
    iban:string

}
export interface InputBanquesDto{
  idBanque:string
  idTeleoperateur:string
  type:number
  iban:string

}

