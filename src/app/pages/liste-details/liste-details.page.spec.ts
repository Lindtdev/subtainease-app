import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeDetailsPage } from './liste-details.page';

describe('ListeDetailsPage', () => {
  let component: ListeDetailsPage;
  let fixture: ComponentFixture<ListeDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
