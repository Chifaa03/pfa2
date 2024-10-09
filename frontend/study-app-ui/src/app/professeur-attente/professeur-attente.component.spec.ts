import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurAttenteComponent } from './professeur-attente.component';

describe('ProfesseurAttenteComponent', () => {
  let component: ProfesseurAttenteComponent;
  let fixture: ComponentFixture<ProfesseurAttenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesseurAttenteComponent]
    });
    fixture = TestBed.createComponent(ProfesseurAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
