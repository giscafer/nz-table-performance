import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YztTableDemoComponent } from './yzt-table-demo.component';

describe('YztTableDemoComponent', () => {
  let component: YztTableDemoComponent;
  let fixture: ComponentFixture<YztTableDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YztTableDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YztTableDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
