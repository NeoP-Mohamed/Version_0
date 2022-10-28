import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-inscription-societes-steps',
  templateUrl: './inscription-societes-steps.component.html',
  styleUrls: ['./inscription-societes-steps.component.scss'],
})
export class InscriptionSocietesStepsComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  terminer() {
    this.router.navigate(['Inscription/terminer']);
  }









}

