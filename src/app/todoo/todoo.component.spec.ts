import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodooComponent } from './todoo.component';

describe('TodooComponent', () => {
  let component: TodooComponent;
  let fixture: ComponentFixture<TodooComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodooComponent]
    });
    fixture = TestBed.createComponent(TodooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
