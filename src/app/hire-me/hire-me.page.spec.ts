import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HireMePage } from './hire-me.page';

describe('HireMePage', () => {
  let component: HireMePage;
  let fixture: ComponentFixture<HireMePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HireMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
