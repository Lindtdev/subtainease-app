import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BienvenuPage } from './bienvenu.page';

describe('BienvenuPage', () => {
  let component: BienvenuPage;
  let fixture: ComponentFixture<BienvenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
