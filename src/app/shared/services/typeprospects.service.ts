import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypeProspectsService {
    typeprospectsDetailsUrl=environment.base_url+Constants.GetTypeProspectsDetailsUrl;
    typeprospectsEditUrl=environment.base_url+Constants.GetTypeProspectsEditUrl;
    allTypeProspectsUrl=environment.base_url+Constants.GetAllTypeProspectsUrl;
    createTypeProspectsUrl=environment.base_url+Constants.CreateTypeProspectsUrl;
    updateTypeProspectsUrl=environment.base_url+Constants.CreateTypeProspectsUrl;

  constructor(private http: HttpClient) { }
  getTypeProspects(idTypeProspect:number):Observable<TypeProspectsDto> {
    let params = new HttpParams();
    params = params.append('idTypeProspect',idTypeProspect);
    return this.http.get<TypeProspectsDto>(this.typeprospectsDetailsUrl,{params:params});
  }
  getEditTypeProspects(idTypeProspect:number):Observable<InputTypeProspectsDto> {
    let params = new HttpParams();
    params = params.append('idTypeProspect',idTypeProspect);
    return this.http.get<InputTypeProspectsDto>(this.typeprospectsEditUrl,{params:params});
  }
  getAllTypeProspects():Observable<TypeProspectsDto[]> {
    return this.http.get<TypeProspectsDto[]>(this.allTypeProspectsUrl);
  }
  createTypeProspects(typeprospects:InputTypeProspectsDto){
    return this.http.post<any>(this.createTypeProspectsUrl,typeprospects);
  }
  updateTypeProspects(typeprospects:InputTypeProspectsDto){
    return this.http.put<any>(this.updateTypeProspectsUrl,typeprospects);
  }
}
export interface TypeProspectsDto{
    idTypeProspect:string
    societes:string
    libelle_Type_Prospect:number

}
export interface InputTypeProspectsDto{
  idTypeProspect:string
  idSociete:string
  libelle_Type_Prospect:number

}

