import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BecomePublisherPage } from './become-publisher.page';

describe('BecomePublisherPage', () => {
  let component: BecomePublisherPage;
  let fixture: ComponentFixture<BecomePublisherPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BecomePublisherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
