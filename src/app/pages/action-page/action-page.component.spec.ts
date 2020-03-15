/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActionPageComponent } from './action-page.component';

describe('ActionPageComponent', () => {
  let component: ActionPageComponent;
  let fixture: ComponentFixture<ActionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
