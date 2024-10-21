import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SucessRegisterPage } from './sucess-register.page';

describe('SucessRegisterPage', () => {
  let component: SucessRegisterPage;
  let fixture: ComponentFixture<SucessRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SucessRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
