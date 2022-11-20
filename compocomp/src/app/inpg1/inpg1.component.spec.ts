import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inpg1Component } from './inpg1.component';

describe('Inpg1Component', () => {
  let component: Inpg1Component;
  let fixture: ComponentFixture<Inpg1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Inpg1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inpg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
