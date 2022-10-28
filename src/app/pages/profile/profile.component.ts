import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faCoffee, faFile, faHome, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { AddTeleoperateursComponent } from '../MasterAPI/teleoperateurs/add-teleoperateurs/add-teleoperateurs.component';
import { DonneesBancairesComponent } from '../MasterAPI/teleoperateurs/donnees-bancaires/donnees-bancaires.component';
import { DonneesEntrepriseComponent } from '../MasterAPI/teleoperateurs/donnees-entreprise/donnees-entreprise.component';
import { DonneesPersonnellesComponent } from '../MasterAPI/teleoperateurs/donnees-personnelles/donnees-personnelles.component';
import { HoraireTravailComponent } from '../MasterAPI/teleoperateurs/horaire-travail/horaire-travail.component';
import { ListTeleoperateursComponent } from '../MasterAPI/teleoperateurs/list-teleoperateurs/list-teleoperateurs.component';
import { SecteursActiviteComponent } from '../MasterAPI/teleoperateurs/secteurs-activite/secteurs-activite.component';
import { TextePresentationComponent } from '../MasterAPI/teleoperateurs/texte-presentation/texte-presentation.component';
import { TypesMissionComponent } from '../MasterAPI/teleoperateurs/types-mission/types-mission.component';
import { VotreVoixComponent } from '../MasterAPI/teleoperateurs/votre-voix/votre-voix.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  faCoffee = faCoffee;
  pen=faPen;
  user=faUser;
  pages=faFile;
  home=faHome

  constructor(public dialog: MatDialog) {}
  
  openDialogAddTeleoperateurs(): void {
    const dialogRef = this.dialog.open(AddTeleoperateursComponent,  {
      width: '78vw', 
      height:'76.5vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  
  openDialogBancaies(): void {
    const dialogRef = this.dialog.open(DonneesBancairesComponent,  {
      width: '78vw', 
      height:'75.6vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openDialogEntreprise(): void {
    const dialogRef = this.dialog.open(DonneesEntrepriseComponent,  {
      width: '78vw', 
      height:'75.6vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openDialogPersonnelles(): void {
    const dialogRef = this.dialog.open(DonneesPersonnellesComponent,  {
      width: '78vw', 
      height:'67.4vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openDialogHoraire(): void {
    const dialogRef = this.dialog.open(HoraireTravailComponent,  {
      width: '78vw', 
      height:'75.6vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openDialogSecteursActivite(): void {
    const dialogRef = this.dialog.open(SecteursActiviteComponent,  {
      width: '78vw', 
      height:'75.6vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openDialogPresentation(): void {
    const dialogRef = this.dialog.open(TextePresentationComponent,  {
      width: '78vw', 
      height:'33vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openDialogTypesMission(): void {
    const dialogRef = this.dialog.open(TypesMissionComponent,  {
      width: '78vw', 
      height:'75.6vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  openDialogVoix(): void {
    const dialogRef = this.dialog.open(VotreVoixComponent,  {
      width: '78vw', 
      height:'75.6vh', 
      maxWidth: '100vw', 
      maxHeight: '100vh', 
   
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }


  ngOnInit(): void {
   var _this = this;
    $('#dispoTable tbody').on('click', 'td', function () {
      let row = $(this).closest("tr").index()
      let col = $(this).closest("td").index()

      _this.dispo(row, col)
    });

    this.dispo
  }

  dispo(this: any, row: number, col: number) {
    var tbody = document.getElementById('dispoTable')?.getElementsByTagName('tbody')[0] as HTMLTableSectionElement;
    var tHead = document.getElementById('dispoTable')?.getElementsByTagName('thead')[0];

    if (tbody.rows[row].cells[col].style.backgroundColor != '#376fd0') {
      tbody.rows[row].cells[col].style.backgroundColor = '#376fd0'
      this.dispoArray.push(tbody.rows[row].cells[0].innerHTML + '/' + tHead?.getElementsByTagName('th')[col].innerHTML)

    }
    else {
      tbody.rows[row].cells[col].style.backgroundColor = 'white'
      const index = this.dispoArray.indexOf(tbody.rows[row].cells[0].innerHTML + '/' + tHead?.getElementsByTagName('th')[col].innerHTML, 0);
      if (index > -1) {
        this.dispoArray.splice(index, 1);
      }
    }
    console.log(this.dispoArray)
  }

}
