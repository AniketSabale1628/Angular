import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCOmponentComponent } from './first-component.component';

describe('FirstCOmponentComponent', () => {
  let component: FirstCOmponentComponent;
  let fixture: ComponentFixture<FirstCOmponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCOmponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCOmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
