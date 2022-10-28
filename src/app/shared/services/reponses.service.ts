import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReponsesService {
    reponsesDetailsUrl=environment.base_url+Constants.GetReponsesDetailsUrl;
    reponsesEditUrl=environment.base_url+Constants.GetReponsesEditUrl;
    allReponsesUrl=environment.base_url+Constants.GetAllReponsesUrl;
    createReponsesUrl=environment.base_url+Constants.CreateReponsesUrl;
    updateReponsesUrl=environment.base_url+Constants.CreateReponsesUrl;

  constructor(private http: HttpClient) { }
  getReponses(idReponse:number):Observable<ReponsesDto> {
    let params = new HttpParams();
    params = params.append('idReponse',idReponse);
    return this.http.get<ReponsesDto>(this.reponsesDetailsUrl,{params:params});
  }
  getEditReponses(idReponse:number):Observable<InputReponsesDto> {
    let params = new HttpParams();
    params = params.append('idReponse',idReponse);
    return this.http.get<InputReponsesDto>(this.reponsesEditUrl,{params:params});
  }
  getAllReponses():Observable<ReponsesDto[]> {
    return this.http.get<ReponsesDto[]>(this.allReponsesUrl);
  }
  createReponses(reponses:InputReponsesDto){
    return this.http.post<any>(this.createReponsesUrl,reponses);
  }
  updateReponses(reponses:InputReponsesDto){
    return this.http.put<any>(this.updateReponsesUrl,reponses);
  }
}
export interface ReponsesDto{
    idReponse:string
    questions:string
    reponse:string

}
export interface InputReponsesDto{
  idReponse:string
  idQuestion:string
  reponse:string

}

