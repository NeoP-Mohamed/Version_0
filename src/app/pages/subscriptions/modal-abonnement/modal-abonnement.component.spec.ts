import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAbonnementComponent } from './modal-abonnement.component';

describe('ModalAbonnementComponent', () => {
  let component: ModalAbonnementComponent;
  let fixture: ComponentFixture<ModalAbonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAbonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAbonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
