import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayPackPage } from './pay-pack.page';

describe('PayPackPage', () => {
  let component: PayPackPage;
  let fixture: ComponentFixture<PayPackPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
