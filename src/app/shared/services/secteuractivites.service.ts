import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecteurActivitesService {
    secteuractivitesDetailsUrl=environment.base_url+Constants.GetSecteurActivitesDetailsUrl;
    secteuractivitesEditUrl=environment.base_url+Constants.GetSecteurActivitesEditUrl;
    allSecteurActivitesUrl=environment.base_url+Constants.GetAllSecteurActivitesUrl;
    createSecteurActivitesUrl=environment.base_url+Constants.CreateSecteurActivitesUrl;
    updateSecteurActivitesUrl=environment.base_url+Constants.CreateSecteurActivitesUrl;

  constructor(private http: HttpClient) { }
  getSecteurActivites(idSecteurActivite:number):Observable<SecteurActivitesDto> {
    let params = new HttpParams();
    params = params.append('idSecteurActivite',idSecteurActivite);
    return this.http.get<SecteurActivitesDto>(this.secteuractivitesDetailsUrl,{params:params});
  }
  getEditSecteurActivites(idSecteurActivite:number):Observable<InputSecteurActivitesDto> {
    let params = new HttpParams();
    params = params.append('idSecteurActivite',idSecteurActivite);
    return this.http.get<InputSecteurActivitesDto>(this.secteuractivitesEditUrl,{params:params});
  }
  getAllSecteurActivites():Observable<SecteurActivitesDto[]> {
    return this.http.get<SecteurActivitesDto[]>(this.allSecteurActivitesUrl);
  }
  createSecteurActivites(secteuractivites:InputSecteurActivitesDto){
    return this.http.post<any>(this.createSecteurActivitesUrl,secteuractivites);
  }
  updateSecteurActivites(secteuractivites:InputSecteurActivitesDto){
    return this.http.put<any>(this.updateSecteurActivitesUrl,secteuractivites);
  }
}
export interface SecteurActivitesDto{
    idSecteurActivite:string
    teleoperateurs:string
    libelle_Type_Secteur_Activite:number
    secteur_Activite_Souhaitee:number

}
export interface InputSecteurActivitesDto{
  idSecteurActivite:string
  idTeleoperateur:string
  libelle_Type_Secteur_Activite:number
  secteur_Activite_Souhaitee:number

}

