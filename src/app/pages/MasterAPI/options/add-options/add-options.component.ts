import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddAbonnementsComponent } from 'src/app/pages/MasterAPI/abonnements/add-abonnements/add-abonnements.component';
import { AbonnementsDto, AbonnementsService } from 'src/app/shared/services/abonnements.service';
import { OptionsService, InputOptionsDto, OptionsDto } from 'src/app/shared/services/options.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-options',
  templateUrl: './add-options.component.html',
  styleUrls: ['./add-options.component.scss']
})

export class AddOptionsComponent implements OnInit {
  public abonnementss: AbonnementsDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idOption: any = 0;
  optionsDto: InputOptionsDto | undefined;
  public optionsGroup = new FormGroup({
    abonnements : new FormControl('', [Validators.required]),
    libelle_Option : new FormControl('', [Validators.required]),
    description : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private abonnementsService: AbonnementsService,
              private optionsService: OptionsService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefAbonnements = this.dialog.open(AddAbonnementsComponent);

    dialogRefAbonnements.afterClosed().subscribe(result => {
      this.getAllAbonnements();
    });
  }
  
  getAllAbonnements() {
    this.abonnementsService.getAllAbonnements()
      .subscribe((data: Array<AbonnementsDto>) => {
        this.abonnementss = [...data];
      });
  }
  getOptions(idOption: number) {
    this.optionsService.getEditOptions(idOption).subscribe(res => {
      this.optionsDto = res;      
      this.libelle_Option?.setValue(res.libelle_Option);        
      this.abonnements?.setValue(res.idAbonnement, { onlySelf: true });      
      this.description?.setValue(res.description);  
    });    
  }

  ngOnInit(): void {
    this.getAllAbonnements();
    this.activatedroute.paramMap.subscribe(params => {
      this.idOption = Number(params.get('idOption'));
      this.getOptions(this.idOption);
    });
  }

  onSubmit() {
    this.optionsGroup.markAllAsTouched();
    if (this.optionsGroup.valid) { 
     if(this.idOption>0){
      var optionsDto: InputOptionsDto = {
        idOption: this.idOption,        
        libelle_Option: this.optionsGroup.get('libelle_Option')?.value,        
        idAbonnement: this.optionsGroup.get('abonnements')?.value,        
        description: this.optionsGroup.get('description')?.value
      }

      this.optionsService.updateOptions(optionsDto).subscribe(res => {
        this.toastr.success('Create options', 'Sucess');
      });
     }
     else{
      var optionsDto: InputOptionsDto = {
        idOption: this.idOption,        
        libelle_Option: this.optionsGroup.get('libelle_Option')?.value,        
        idAbonnement: this.optionsGroup.get('abonnements')?.value,        
        description: this.optionsGroup.get('description')?.value
      }

      this.optionsService.createOptions(optionsDto).subscribe(res => {
        this.toastr.success('Create options', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get libelle_Option() { return this.optionsGroup.get('libelle_Option'); }  
  get abonnements() { return this.optionsGroup.get('abonnements'); }  
  get description() { return this.optionsGroup.get('description'); }
}