import { Component, OnInit } from '@angular/core';
import { Teleoperateurs__MissionsDto, Teleoperateurs__MissionsService } from '../../../../shared/services/teleoperateurs__missions.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-teleoperateurs__missions',
  templateUrl: './list-teleoperateurs__missions.component.html',
  styleUrls: ['./list-teleoperateurs__missions.component.scss']
})
export class ListTeleoperateurs__MissionsComponent implements OnInit {
  teleoperateurs__missions:Teleoperateurs__MissionsDto|undefined;
  teleoperateurs__missionss:Teleoperateurs__MissionsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['teleoperateurs', 
'missions', 
'Actions'];
   constructor(private teleoperateurs__missionsService:Teleoperateurs__MissionsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllTeleoperateurs__Missions();
   }
 
   getTeleoperateurs__Missions(){ 
       this.teleoperateurs__missionsService.getTeleoperateurs__Missions(1)
         .subscribe((data: Teleoperateurs__MissionsDto) => this.teleoperateurs__missions = { ...data });  
   }
 
   getAllTeleoperateurs__Missions(){ 
     this.teleoperateurs__missionsService.getAllTeleoperateurs__Missions()
       .subscribe((data: Array<Teleoperateurs__MissionsDto>) => {
         this.teleoperateurs__missionss = [...data]  ;
       this.resultsLength=this.teleoperateurs__missionss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addTeleoperateurs__Missions(){
    
  }
 }
