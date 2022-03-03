import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNicolaChildComponent } from './test-nicola-child.component';

describe('TestNicolaChildComponent', () => {
  let component: TestNicolaChildComponent;
  let fixture: ComponentFixture<TestNicolaChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNicolaChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNicolaChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
