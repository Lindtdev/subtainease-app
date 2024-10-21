import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifyOptPage } from './verify-opt.page';

describe('VerifyOptPage', () => {
  let component: VerifyOptPage;
  let fixture: ComponentFixture<VerifyOptPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyOptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
