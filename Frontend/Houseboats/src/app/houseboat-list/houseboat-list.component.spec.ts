import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseboatListComponent } from './houseboat-list.component';

describe('HouseboatListComponent', () => {
  let component: HouseboatListComponent;
  let fixture: ComponentFixture<HouseboatListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseboatListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseboatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
