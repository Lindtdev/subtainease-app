import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailPostPage } from './detail-post.page';

describe('DetailPostPage', () => {
  let component: DetailPostPage;
  let fixture: ComponentFixture<DetailPostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
