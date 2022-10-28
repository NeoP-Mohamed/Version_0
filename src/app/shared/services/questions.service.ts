import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Constants } from '../consts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
    questionsDetailsUrl=environment.base_url+Constants.GetQuestionsDetailsUrl;
    questionsEditUrl=environment.base_url+Constants.GetQuestionsEditUrl;
    allQuestionsUrl=environment.base_url+Constants.GetAllQuestionsUrl;
    createQuestionsUrl=environment.base_url+Constants.CreateQuestionsUrl;
    updateQuestionsUrl=environment.base_url+Constants.CreateQuestionsUrl;

  constructor(private http: HttpClient) { }
  getQuestions(idQuestion:number):Observable<QuestionsDto> {
    let params = new HttpParams();
    params = params.append('idQuestion',idQuestion);
    return this.http.get<QuestionsDto>(this.questionsDetailsUrl,{params:params});
  }
  getEditQuestions(idQuestion:number):Observable<InputQuestionsDto> {
    let params = new HttpParams();
    params = params.append('idQuestion',idQuestion);
    return this.http.get<InputQuestionsDto>(this.questionsEditUrl,{params:params});
  }
  getAllQuestions():Observable<QuestionsDto[]> {
    return this.http.get<QuestionsDto[]>(this.allQuestionsUrl);
  }
  createQuestions(questions:InputQuestionsDto){
    return this.http.post<any>(this.createQuestionsUrl,questions);
  }
  updateQuestions(questions:InputQuestionsDto){
    return this.http.put<any>(this.updateQuestionsUrl,questions);
  }
}
export interface QuestionsDto{
    idQuestion:string
    question:string

}
export interface InputQuestionsDto{
  idQuestion:string
  question:string

}

