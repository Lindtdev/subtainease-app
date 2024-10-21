import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoCompaignPage } from './do-compaign.page';

describe('DoCompaignPage', () => {
  let component: DoCompaignPage;
  let fixture: ComponentFixture<DoCompaignPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoCompaignPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
