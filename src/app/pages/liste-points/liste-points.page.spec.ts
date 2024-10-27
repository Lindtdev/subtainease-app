import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListePointsPage } from './liste-points.page';

describe('ListePointsPage', () => {
  let component: ListePointsPage;
  let fixture: ComponentFixture<ListePointsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePointsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
