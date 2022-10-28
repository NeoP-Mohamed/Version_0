import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentI } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponentI;
  let fixture: ComponentFixture<HeaderComponentI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponentI ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponentI);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
