import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalStoreCrudComponent } from './signal-store-crud.component';

describe('SignalStoreCrudComponent', () => {
  let component: SignalStoreCrudComponent;
  let fixture: ComponentFixture<SignalStoreCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalStoreCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalStoreCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
