import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapingPage } from './maping.page';

describe('MapingPage', () => {
  let component: MapingPage;
  let fixture: ComponentFixture<MapingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MapingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
