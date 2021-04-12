import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewHouseboatComponent } from './new-houseboat.component';

describe('NewHouseboatComponent', () => {
  let component: NewHouseboatComponent;
  let fixture: ComponentFixture<NewHouseboatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewHouseboatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewHouseboatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
