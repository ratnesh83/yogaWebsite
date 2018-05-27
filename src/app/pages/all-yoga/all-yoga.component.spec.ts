import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllYogaComponent } from './all-yoga.component';

describe('AllYogaComponent', () => {
  let component: AllYogaComponent;
  let fixture: ComponentFixture<AllYogaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllYogaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllYogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
