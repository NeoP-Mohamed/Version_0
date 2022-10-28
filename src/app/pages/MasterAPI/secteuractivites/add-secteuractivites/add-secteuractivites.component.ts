import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AddTeleoperateursComponent } from 'src/app/pages/MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { TeleoperateursDto, TeleoperateursService } from 'src/app/shared/services/teleoperateurs.service';
import { SecteurActivitesService, InputSecteurActivitesDto, SecteurActivitesDto } from 'src/app/shared/services/secteuractivites.service';
import {Enums} from "src/app/shared/enums";

@Component({
  selector: 'app-add-secteuractivites',
  templateUrl: './add-secteuractivites.component.html',
  styleUrls: ['./add-secteuractivites.component.scss']
})

export class AddSecteurActivitesComponent implements OnInit {
  public teleoperateurss: TeleoperateursDto[] | undefined;
  
  keys = Object.keys;
  values = Object.values;
  Enums = Enums;
  idSecteurActivite: any = 0;
  secteuractivitesDto: InputSecteurActivitesDto | undefined;
  public secteuractivitesGroup = new FormGroup({
    teleoperateurs : new FormControl('', [Validators.required]),
    libelle_Type_Secteur_Activite : new FormControl('', [Validators.required]),
    secteur_Activite_Souhaitee : new FormControl('', [Validators.required]),
});

  constructor(private toastr: ToastrService,
    private teleoperateursService: TeleoperateursService,
              private secteuractivitesService: SecteurActivitesService,
              public dialog: MatDialog, 
              private activatedroute: ActivatedRoute) { }

  openDialog() {
    const dialogRefTeleoperateurs = this.dialog.open(AddTeleoperateursComponent);

    dialogRefTeleoperateurs.afterClosed().subscribe(result => {
      this.getAllTeleoperateurs();
    });
  }
  
  getAllTeleoperateurs() {
    this.teleoperateursService.getAllTeleoperateurs()
      .subscribe((data: Array<TeleoperateursDto>) => {
        this.teleoperateurss = [...data];
      });
  }
  getSecteurActivites(idSecteurActivite: number) {
    this.secteuractivitesService.getEditSecteurActivites(idSecteurActivite).subscribe(res => {
      this.secteuractivitesDto = res;      
      this.teleoperateurs?.setValue(res.idTeleoperateur, { onlySelf: true });      
      this.libelle_Type_Secteur_Activite?.setValue(res.libelle_Type_Secteur_Activite);        
      this.secteur_Activite_Souhaitee?.setValue(res.secteur_Activite_Souhaitee);  
    });    
  }

  ngOnInit(): void {
    this.getAllTeleoperateurs();
    this.activatedroute.paramMap.subscribe(params => {
      this.idSecteurActivite = Number(params.get('idSecteurActivite'));
      this.getSecteurActivites(this.idSecteurActivite);
    });
  }

  onSubmit() {
    this.secteuractivitesGroup.markAllAsTouched();
    if (this.secteuractivitesGroup.valid) { 
     if(this.idSecteurActivite>0){
      var secteuractivitesDto: InputSecteurActivitesDto = {
        idSecteurActivite: this.idSecteurActivite,        
        idTeleoperateur: this.secteuractivitesGroup.get('teleoperateurs')?.value,        
        libelle_Type_Secteur_Activite: this.secteuractivitesGroup.get('libelle_Type_Secteur_Activite')?.value,        
        secteur_Activite_Souhaitee: this.secteuractivitesGroup.get('secteur_Activite_Souhaitee')?.value
      }

      this.secteuractivitesService.updateSecteurActivites(secteuractivitesDto).subscribe(res => {
        this.toastr.success('Create secteuractivites', 'Sucess');
      });
     }
     else{
      var secteuractivitesDto: InputSecteurActivitesDto = {
        idSecteurActivite: this.idSecteurActivite,        
        idTeleoperateur: this.secteuractivitesGroup.get('teleoperateurs')?.value,        
        libelle_Type_Secteur_Activite: this.secteuractivitesGroup.get('libelle_Type_Secteur_Activite')?.value,        
        secteur_Activite_Souhaitee: this.secteuractivitesGroup.get('secteur_Activite_Souhaitee')?.value
      }

      this.secteuractivitesService.createSecteurActivites(secteuractivitesDto).subscribe(res => {
        this.toastr.success('Create secteuractivites', 'Sucess');
      });
     }
    }
    else {
    }
  }  
  get teleoperateurs() { return this.secteuractivitesGroup.get('teleoperateurs'); }  
  get libelle_Type_Secteur_Activite() { return this.secteuractivitesGroup.get('libelle_Type_Secteur_Activite'); }  
  get secteur_Activite_Souhaitee() { return this.secteuractivitesGroup.get('secteur_Activite_Souhaitee'); }
}