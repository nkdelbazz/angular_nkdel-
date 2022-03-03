import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapTestingComponent } from './boostrap-testing.component';

describe('BoostrapTestingComponent', () => {
  let component: BoostrapTestingComponent;
  let fixture: ComponentFixture<BoostrapTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoostrapTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoostrapTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
