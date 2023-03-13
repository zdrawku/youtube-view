import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View21Component } from './view21.component';

describe('View21Component', () => {
  let component: View21Component;
  let fixture: ComponentFixture<View21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
