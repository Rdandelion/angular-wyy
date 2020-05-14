import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { HomeModule } from './home/home.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [],
  imports: [
    // 这样，每个页面都能使用share里面依赖的模块，不用每个页面都引入
    ShareModule,
    HomeModule,
    NgZorroAntdModule,
    NzIconModule
  ],
  exports: [
    HomeModule,
  ]
})
export class PagesModule { }
