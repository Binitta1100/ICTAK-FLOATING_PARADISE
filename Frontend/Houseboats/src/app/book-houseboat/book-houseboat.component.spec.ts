import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHouseboatComponent } from './book-houseboat.component';

describe('BookHouseboatComponent', () => {
  let component: BookHouseboatComponent;
  let fixture: ComponentFixture<BookHouseboatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookHouseboatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHouseboatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
