import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NzTableDemoComponent } from './nz-table-demo.component';

describe('NzTableDemoComponent', () => {
  let component: NzTableDemoComponent;
  let fixture: ComponentFixture<NzTableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NzTableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NzTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
