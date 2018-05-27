import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneYogaComponent } from './one-yoga.component';

describe('OneYogaComponent', () => {
  let component: OneYogaComponent;
  let fixture: ComponentFixture<OneYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
