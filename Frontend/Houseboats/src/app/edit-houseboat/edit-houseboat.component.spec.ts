import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHouseboatComponent } from './edit-houseboat.component';

describe('EditHouseboatComponent', () => {
  let component: EditHouseboatComponent;
  let fixture: ComponentFixture<EditHouseboatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHouseboatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHouseboatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
