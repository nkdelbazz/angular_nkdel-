import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NkuinsertComponent } from './nkuinsert.component';

describe('NkuinsertComponent', () => {
  let component: NkuinsertComponent;
  let fixture: ComponentFixture<NkuinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NkuinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NkuinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
