import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecommandedPostPage } from './recommanded-post.page';

describe('RecommandedPostPage', () => {
  let component: RecommandedPostPage;
  let fixture: ComponentFixture<RecommandedPostPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommandedPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
