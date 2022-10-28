import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-inscription-teleoperateurs',
  templateUrl: './inscription-teleoperateurs.component.html',
  styleUrls: ['./inscription-teleoperateurs.component.scss'],
})
export class InscriptionTeleoperateursComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  enregistrer() {
    this.router.navigate(['Inscription/teleoperateurssteps']);
  }



}

