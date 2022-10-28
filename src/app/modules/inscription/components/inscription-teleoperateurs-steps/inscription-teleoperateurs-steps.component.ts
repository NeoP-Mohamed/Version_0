import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ActivatedRoute, Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-inscription-teleoperateurs-steps',
  templateUrl: './inscription-teleoperateurs-steps.component.html',
  styleUrls: ['./inscription-teleoperateurs-steps.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class InscriptionTeleoperateursStepsComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper | any;
  @ViewChild('stepper2') stepper2: MatStepper | any;
  constructor(private router: Router) { }
  TVASelected:any;
  nonTVASelected:any;
  radioSelected :any;
  lastStep: boolean = false;
  lastStep1: boolean = false;
  lastStep2: boolean = false;
  previousStep: boolean = false;
  form!: FormGroup;
  maxChars = 5;
  ParrainageValue: any;
  titleModel = 'I have more than 10 characters'
  showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val1: boolean = false;
  showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val2: boolean = false;
  showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val3: boolean = false;
  showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val4: boolean = false;
  showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val5: boolean = false;


  showCheckboxf00adf45_afa8_45e6_908b_c200fc619060Val1: boolean = false;
  showCheckboxf00adf45_afa8_45e6_908b_c200fc619060Val2: boolean = false;
  showCheckboxf00adf45_afa8_45e6_908b_c200fc619060Val3: boolean = false;

  showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal1: boolean = false;
  showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal2: boolean = false;
  showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal3: boolean = false;
  showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal4: boolean = false;
  showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal5: boolean = false;

  showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val1: boolean = false;
  showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val2: boolean = false;
  showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val3: boolean = false;
  showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val4: boolean = false;
  showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val5: boolean = false;


















  hero = { name: 'Dr.'}

  ngOnInit(): void {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  
  }
  enregistrer() {
    this.router.navigate(['/Inscription/teleoperateurs']);
  }
  ngAfterViewInit() {
    this.stepper._getIndicatorType = () => 'number';
    this.stepper2._getIndicatorType = () => 'number';
  }

  checkeda1f76413_81d7_4a7b_9536_adc5b3fff122Val1(event: any) {
    if (event.target.checked) {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val1 = true;
    } else {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val1 = false;
    }
  }
  checkeda1f76413_81d7_4a7b_9536_adc5b3fff122Val2(event: any) {
    if (event.target.checked) {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val2 = true;
    } else {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val2 = false;
    }
  }
  checkeda1f76413_81d7_4a7b_9536_adc5b3fff122Val3(event: any) {
    if (event.target.checked) {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val3 = true;
    } else {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val3 = false;
    }
  }
  checkeda1f76413_81d7_4a7b_9536_adc5b3fff122Val4(event: any) {
    if (event.target.checked) {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val4 = true;
    } else {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val4 = false;
    }
  }
  checkeda1f76413_81d7_4a7b_9536_adc5b3fff122Val5(event: any) {
    if (event.target.checked) {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val5 = true;
    } else {
      this.showCheckboxa1f76413_81d7_4a7b_9536_adc5b3fff122Val5 = false;
    }
  }


  checkedf00adf45_afa8_45e6_908b_c200fc619060Val1(event: any) {
    if (event.target.checked) {
      this.showCheckboxf00adf45_afa8_45e6_908b_c200fc619060Val1 = true;
    } else {
      this.showCheckboxf00adf45_afa8_45e6_908b_c200fc619060Val1 = false;
    }
  }
  checkedf00adf45_afa8_45e6_908b_c200fc619060Val2(event: any) {
    if (event.target.checked) {
      this.showCheckboxf00adf45_afa8_45e6_908b_c200fc619060Val2 = true;
    } else {
      this.showCheckboxf00adf45_afa8_45e6_908b_c200fc619060Val2 = false;
    }
  }
  checkedf00adf45_afa8_45e6_908b_c200fc619060Val3(event: any) {
    if (event.target.checked) {
      this.showCheckboxf00adf45_afa8_45e6_908b_c200fc619060Val3 = true;
    } else {
      this.showCheckboxf00adf45_afa8_45e6_908b_c200fc619060Val3 = false;
    }
  }

  checked74720253_0e9d_4b99_a6d7_bb70186ab55bVal1(event: any) {
    if (event.target.checked) {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal1 = true;
    } else {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal1 = false;
    }
  }
  checked74720253_0e9d_4b99_a6d7_bb70186ab55bVal2(event: any) {
    if (event.target.checked) {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal2 = true;
    } else {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal2 = false;
    }
  }
  checked74720253_0e9d_4b99_a6d7_bb70186ab55bVal3(event: any) {
    if (event.target.checked) {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal3 = true;
    } else {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal3 = false;
    }
  }
  checked74720253_0e9d_4b99_a6d7_bb70186ab55bVal4(event: any) {
    if (event.target.checked) {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal4 = true;
    } else {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal4 = false;
    }
  }
  checked74720253_0e9d_4b99_a6d7_bb70186ab55bVal5(event: any) {
    if (event.target.checked) {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal5 = true;
    } else {
      this.showCheckbox74720253_0e9d_4b99_a6d7_bb70186ab55bVal5 = false;
    }
  }

  checkedf3368d77_7ff5_4fbd_aec2_b4845d757b64Val1(event: any) {
    if (event.target.checked) {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val1 = true;
    } else {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val1 = false;
    }
  }
  checkedf3368d77_7ff5_4fbd_aec2_b4845d757b64Val2(event: any) {
    if (event.target.checked) {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val2 = true;
    } else {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val2 = false;
    }
  }
  checkedf3368d77_7ff5_4fbd_aec2_b4845d757b64Val3(event: any) {
    if (event.target.checked) {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val3 = true;
    } else {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val3 = false;
    }
  }
  checkedf3368d77_7ff5_4fbd_aec2_b4845d757b64Val4(event: any) {
    if (event.target.checked) {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val4 = true;
    } else {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val4 = false;
    }
  }
  checkedf3368d77_7ff5_4fbd_aec2_b4845d757b64Val5(event: any) {
    if (event.target.checked) {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val5 = true;
    } else {
      this.showCheckboxf3368d77_7ff5_4fbd_aec2_b4845d757b64Val5 = false;
    }
  }
  
  onPrevious(stepper: MatStepper) {
    this.lastStep = false
    stepper.previous();
 }
 onPrevious1(stepper: MatStepper) {
   this.lastStep = true
   this.lastStep1 = false
   stepper.previous();
}
onPrevious2(stepper: MatStepper) {
  this.lastStep = true
  this.lastStep1 = true
  this.lastStep2 = false
  stepper.previous();
}
onNext(stepper: MatStepper) {
  //this.lastStep = true
  //this.lastStep1 = true
  //this.lastStep2 = true
  stepper.next();
}


terminer() {
  this.router.navigate(['Inscription/terminer']);
}

















}

