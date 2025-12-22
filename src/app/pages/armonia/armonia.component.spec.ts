import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmoniaComponent } from './armonia.component';

describe('ArmoniaComponent', () => {
  let component: ArmoniaComponent;
  let fixture: ComponentFixture<ArmoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArmoniaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArmoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
