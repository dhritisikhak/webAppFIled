import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDemoFormComponent } from './get-demo-form.component';

describe('GetDemoFormComponent', () => {
  let component: GetDemoFormComponent;
  let fixture: ComponentFixture<GetDemoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDemoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDemoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
