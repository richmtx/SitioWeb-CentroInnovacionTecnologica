import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturaAditivaComponent } from './manufactura-aditiva.component';

describe('ManufacturaAditivaComponent', () => {
  let component: ManufacturaAditivaComponent;
  let fixture: ComponentFixture<ManufacturaAditivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManufacturaAditivaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufacturaAditivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
