import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MasterView1Component } from './master-view1.component';

describe('MasterView1Component', () => {
  let component: MasterView1Component;
  let fixture: ComponentFixture<MasterView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasterView1Component ],
      imports: [ NoopAnimationsModule, FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
