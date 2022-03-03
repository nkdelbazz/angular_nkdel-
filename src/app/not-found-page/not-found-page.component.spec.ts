import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NOTFOUNDPAGEComponent } from './not-found-page.component';

describe('NOTFOUNDPAGEComponent', () => {
  let component: NOTFOUNDPAGEComponent;
  let fixture: ComponentFixture<NOTFOUNDPAGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NOTFOUNDPAGEComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NOTFOUNDPAGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
