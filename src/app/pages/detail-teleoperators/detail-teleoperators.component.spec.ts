import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTeleoperatorsComponent } from './detail-teleoperators.component';

describe('DetailTeleoperatorsComponent', () => {
  let component: DetailTeleoperatorsComponent;
  let fixture: ComponentFixture<DetailTeleoperatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTeleoperatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTeleoperatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
