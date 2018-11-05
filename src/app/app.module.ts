import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { NzTableDemoComponent } from './nz-table-demo/nz-table-demo.component';
import { YztTableDemoComponent } from './yzt-table-demo/yzt-table-demo.component';
import { RandomUserService } from './services/random-user.service';
import { IpsApiService } from './services/ips-api.service';
import { ZorroExtModule } from './zorro-ext/lib/yzt-custom.module';
import { API_BASE_URL } from './config/config';

/** 配置 angular i18n **/
registerLocaleData(zh);


@NgModule({
  declarations: [
    AppComponent,
    NzTableDemoComponent, YztTableDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ZorroExtModule.forRoot(),
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    RandomUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
