import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNicolaComponent } from './test-nicola.component';

describe('TestNicolaComponent', () => {
  let component: TestNicolaComponent;
  let fixture: ComponentFixture<TestNicolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNicolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNicolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
