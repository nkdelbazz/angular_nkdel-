import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NkupdateComponent } from './nkupdate.component';

describe('NkupdateComponent', () => {
  let component: NkupdateComponent;
  let fixture: ComponentFixture<NkupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NkupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NkupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
