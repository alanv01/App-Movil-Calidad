import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UnirmePage } from './unirme.page';

describe('UnirmePage', () => {
  let component: UnirmePage;
  let fixture: ComponentFixture<UnirmePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UnirmePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
