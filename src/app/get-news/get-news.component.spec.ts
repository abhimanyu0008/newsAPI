import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetNewsComponent } from './get-news.component';

describe('GetNewsComponent', () => {
  let component: GetNewsComponent;
  let fixture: ComponentFixture<GetNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetNewsComponent]
    });
    fixture = TestBed.createComponent(GetNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
