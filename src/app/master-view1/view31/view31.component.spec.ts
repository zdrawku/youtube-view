import { ComponentFixture, TestBed } from '@angular/core/testing';

import { View31Component } from './view31.component';

describe('View31Component', () => {
  let component: View31Component;
  let fixture: ComponentFixture<View31Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ View31Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(View31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
