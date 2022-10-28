import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionnairesService {
    questionnairesDetailsUrl=environment.base_url+Constants.GetQuestionnairesDetailsUrl;
    questionnairesEditUrl=environment.base_url+Constants.GetQuestionnairesEditUrl;
    allQuestionnairesUrl=environment.base_url+Constants.GetAllQuestionnairesUrl;
    createQuestionnairesUrl=environment.base_url+Constants.CreateQuestionnairesUrl;
    updateQuestionnairesUrl=environment.base_url+Constants.CreateQuestionnairesUrl;

  constructor(private http: HttpClient) { }
  getQuestionnaires(idQuestionnaire:number):Observable<QuestionnairesDto> {
    let params = new HttpParams();
    params = params.append('idQuestionnaire',idQuestionnaire);
    return this.http.get<QuestionnairesDto>(this.questionnairesDetailsUrl,{params:params});
  }
  getEditQuestionnaires(idQuestionnaire:number):Observable<InputQuestionnairesDto> {
    let params = new HttpParams();
    params = params.append('idQuestionnaire',idQuestionnaire);
    return this.http.get<InputQuestionnairesDto>(this.questionnairesEditUrl,{params:params});
  }
  getAllQuestionnaires():Observable<QuestionnairesDto[]> {
    return this.http.get<QuestionnairesDto[]>(this.allQuestionnairesUrl);
  }
  createQuestionnaires(questionnaires:InputQuestionnairesDto){
    return this.http.post<any>(this.createQuestionnairesUrl,questionnaires);
  }
  updateQuestionnaires(questionnaires:InputQuestionnairesDto){
    return this.http.put<any>(this.updateQuestionnairesUrl,questionnaires);
  }
}
export interface QuestionnairesDto{
    idQuestionnaire:string
    teleoperateurs:string
    questions:string
    reponses:string

}
export interface InputQuestionnairesDto{
  idQuestionnaire:string
  idTeleoperateur:string
  idQuestion:string
  idReponse:string

}

