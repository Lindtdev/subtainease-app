import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PublierPage } from './publier.page';

describe('PublierPage', () => {
  let component: PublierPage;
  let fixture: ComponentFixture<PublierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PublierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
