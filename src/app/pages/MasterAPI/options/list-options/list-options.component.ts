import { Component, OnInit } from '@angular/core';
import { OptionsDto, OptionsService } from '../../../../shared/services/options.service';
import { faCoffee,faTrashAlt,faPen,faCheckDouble,faCheckCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-options',
  templateUrl: './list-options.component.html',
  styleUrls: ['./list-options.component.scss']
})
export class ListOptionsComponent implements OnInit {
  options:OptionsDto|undefined;
  optionss:OptionsDto[]=[];
  resultsLength = 0;
   isLoadingResults = true;
   isRateLimitReached = false;
   displayedColumns: string[] = ['abonnements', 
'libelle_Option', 
'description', 
'Actions'];
   constructor(private optionsService:OptionsService) { }
   faCoffee = faCoffee;
   faTrashAlt=faTrashAlt;
   faEdit=faPen;
   faCheckDouble=faCheckDouble;
   faCheckCircle=faCheckCircle;
   ngOnInit(): void {
     this.getAllOptions();
   }
 
   getOptions(){ 
       this.optionsService.getOptions(1)
         .subscribe((data: OptionsDto) => this.options = { ...data });  
   }
 
   getAllOptions(){ 
     this.optionsService.getAllOptions()
       .subscribe((data: Array<OptionsDto>) => {
         this.optionss = [...data]  ;
       this.resultsLength=this.optionss?.length;
       });
   }
   delete(row:any){
    console.log(row.id);
   }
   edit(row:any){
    console.log(row.id);
  }
  addOptions(){
    
  }
 }
