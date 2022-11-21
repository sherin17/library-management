import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookViewpageComponent } from './book-viewpage.component';

describe('BookViewpageComponent', () => {
  let component: BookViewpageComponent;
  let fixture: ComponentFixture<BookViewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookViewpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookViewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
