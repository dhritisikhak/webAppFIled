import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDemoPageComponent } from './get-demo-page.component';

describe('GetDemoPageComponent', () => {
  let component: GetDemoPageComponent;
  let fixture: ComponentFixture<GetDemoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetDemoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDemoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
