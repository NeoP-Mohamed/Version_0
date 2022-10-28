import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { SubscriptionsComponent } from '../subscriptions.component';

@Component({
  selector: 'app-modal-abonnement',
  templateUrl: './modal-abonnement.component.html',
  styleUrls: ['./modal-abonnement.component.scss']
})
export class ModalAbonnementComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  constructor(private router: Router,
    private dialogRef :MatDialogRef<SubscriptionsComponent>,
    private _formBuilder: FormBuilder) { }

  lastStep: boolean = false;
  lastStep1: boolean = false;
  lastStep2: boolean = false;
  previousStep: boolean = false;


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




















  ngOnInit(): void {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
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
  this.onNoClick()
  this.router.navigate(['Inscription/terminer']);
}



  onNoClick(): void {
    this.dialogRef.close();
  }
}
