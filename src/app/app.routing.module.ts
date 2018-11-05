import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableDemoComponent } from './nz-table-demo/nz-table-demo.component';
import { YztTableDemoComponent } from './yzt-table-demo/yzt-table-demo.component';
import { AppComponent } from './app.component';

const routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'nz-table-demo',
    component: NzTableDemoComponent
  },
  {
    path: 'yzt-table-demo',
    component: YztTableDemoComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: []
})
export class AppRoutingModule { }
