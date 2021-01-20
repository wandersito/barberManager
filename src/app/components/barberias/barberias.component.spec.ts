import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberiasComponent } from './barberias.component';

describe('BarberiasComponent', () => {
  let component: BarberiasComponent;
  let fixture: ComponentFixture<BarberiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
