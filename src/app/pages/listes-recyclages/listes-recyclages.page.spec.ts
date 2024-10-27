import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListesRecyclagesPage } from './listes-recyclages.page';

describe('ListesRecyclagesPage', () => {
  let component: ListesRecyclagesPage;
  let fixture: ComponentFixture<ListesRecyclagesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesRecyclagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
