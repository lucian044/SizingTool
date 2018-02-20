import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SizingtoolComponent } from './sizingtool.component';

describe('SizingtoolComponent', () => {
  let component: SizingtoolComponent;
  let fixture: ComponentFixture<SizingtoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SizingtoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SizingtoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
