import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsExampleComponent } from './cors-example.component';

describe('CorsExampleComponent', () => {
  let component: CorsExampleComponent;
  let fixture: ComponentFixture<CorsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
