import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddSocietesComponent } from 'src/app/pages/MasterAPI/societes/add-societes/add-societes.component';
import { SocietesDto, SocietesService } from 'src/app/shared/services/societes.service';
import { TypeProspectsService, InputTypeProspectsDto, TypeProspectsDto } from 'src/app/shared/services/typeprospects.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-typeprospects',
  templateUrl: './add-typeprospects.component.html',
  styleUrls: ['./add-typeprospects.component.scss']
})

export class AddTypeProspectsComponent implements OnInit {
  public societess: SocietesDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idTypeProspect: any = 0;
  typeprospectsDto: InputTypeProspectsDto | undefined;
  public typeprospectsGroup = new FormGroup({
    societes : new FormControl('', [Validators.required]),
    libelle_Type_Prospect : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private societesService: SocietesService,
              private typeprospectsService: TypeProspectsService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefSocietes = this.dialog.open(AddSocietesComponent);

    dialogRefSocietes.afterClosed().subscribe(result => {
      this.getAllSocietes();
    });
  }
  
  getAllSocietes() {
    this.societesService.getAllSocietes()
      .subscribe((data: Array<SocietesDto>) => {
        this.societess = [...data];
      });
  }
  getTypeProspects(idTypeProspect: number) {
    this.typeprospectsService.getEditTypeProspects(idTypeProspect).subscribe(res => {
      this.typeprospectsDto = res;      
      this.societes?.setValue(res.idSociete, { onlySelf: true });      
      this.libelle_Type_Prospect?.setValue(res.libelle_Type_Prospect);  
    });    
  }

  ngOnInit(): void {
    this.getAllSocietes();
    this.activatedroute.paramMap.subscribe(params => {
      this.idTypeProspect = Number(params.get('idTypeProspect'));
      this.getTypeProspects(this.idTypeProspect);
    });
  }

  onSubmit() {
    this.typeprospectsGroup.markAllAsTouched();
    if (this.typeprospectsGroup.valid) { 
     if(this.idTypeProspect>0){
      var typeprospectsDto: InputTypeProspectsDto = {
        idTypeProspect: this.idTypeProspect,        
        idSociete: this.typeprospectsGroup.get('societes')?.value,        
        libelle_Type_Prospect: this.typeprospectsGroup.get('libelle_Type_Prospect')?.value
      }

      this.typeprospectsService.updateTypeProspects(typeprospectsDto).subscribe(res => {
        this.toastr.success('Create typeprospects', 'Sucess');
      });
     }
     else{
      var typeprospectsDto: InputTypeProspectsDto = {
        idTypeProspect: this.idTypeProspect,        
        idSociete: this.typeprospectsGroup.get('societes')?.value,        
        libelle_Type_Prospect: this.typeprospectsGroup.get('libelle_Type_Prospect')?.value
      }

      this.typeprospectsService.createTypeProspects(typeprospectsDto).subscribe(res => {
        this.toastr.success('Create typeprospects', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get societes() { return this.typeprospectsGroup.get('societes'); }  
  get libelle_Type_Prospect() { return this.typeprospectsGroup.get('libelle_Type_Prospect'); }
}