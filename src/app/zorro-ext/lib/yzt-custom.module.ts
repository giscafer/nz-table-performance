// ---------------------------------------------------------
// | Imports
// ---------------------------------------------------------

// Common of angular
import { ModuleWithProviders, NgModule } from '@angular/core';
// Services
// Directives
import { DirectivesModule } from './share/directives/yzt-directives.modules';
import { CustomTemplateModule } from './yzt-grid/custom-template.component';
import { GridIconModule } from './yzt-grid/grid-icon.component';
import { UIGridModule } from './yzt-grid/yzt-grid.component';
import { YztTabsModule } from './yzt-tabs/yzt-tabs.module';
import { YZTViewerDirectiveModule } from './yzt-viewer/yzt-viewer.directive';



// ---------------------------------------------------------
// | Exports
// ---------------------------------------------------------

// Modules
export { NgZorroAntdModule } from 'ng-zorro-antd';
export { CustomTemplateModule } from './yzt-grid/custom-template.component';
export { GridIconModule } from './yzt-grid/grid-icon.component';
export { UIGridModule } from './yzt-grid/yzt-grid.component';
export { YztTabsModule } from './yzt-tabs/yzt-tabs.module';
export { YZTViewerDirectiveModule } from './yzt-viewer/yzt-viewer.directive';

// Components

// Services

// Tokens (eg. global services' config)

// ---------------------------------------------------------
// | Root module
// ---------------------------------------------------------

@NgModule({
  exports: [
    // NgZorroAntdModule,
    UIGridModule,

    GridIconModule,
    CustomTemplateModule,
    DirectivesModule,
    YZTViewerDirectiveModule,

    YztTabsModule,
  ]
})
export class ZorroExtModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZorroExtModule,
      providers: [
      ]
    };
  }
}
