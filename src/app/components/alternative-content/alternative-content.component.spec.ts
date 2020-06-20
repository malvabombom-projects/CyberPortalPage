import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeContentComponent } from './alternative-content.component';

describe('AlternativeContentComponent', () => {
  let component: AlternativeContentComponent;
  let fixture: ComponentFixture<AlternativeContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
