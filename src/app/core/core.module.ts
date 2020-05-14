import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ServicesModule } from '../services/services.module';
import { PagesModule } from '../pages/pages.module';
import { ShareModule } from '../share/share.module';
// 配置语言
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
// 配置语言
registerLocaleData(zh);
// import { NZ_ICONS } from 'ng-zorro-antd';

// import {
//   MenuFoldOutline,
//   MenuUnfoldOutline,
//   FormOutline,
//   DashboardOutline
// } from '@ant-design/icons-angular/icons';

// const icons = [MenuFoldOutline, MenuUnfoldOutline,  FormOutline,  DashboardOutline ]

@NgModule({
  declarations: [],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    // HttpClientModule不放在最后的话，配置路由时可能会遇到问题
    HttpClientModule,
  ],
  exports: [
    ShareModule,
    PagesModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    // { provide: NZ_ICONS, useValue: icons }
  ],

})
export class CoreModule {
  // 这部分的意思就是当父级调用CoreModule模块时，这段代码就会被执行（构造函数嘛），第一次执行，parentModule是不存在的，这段代码可以正常执行。但CoreModule被第二次第三次等引入时，
  // 就会抛出error。这样做的目的就是保证CoreModule只被父级app.module引入。（虽然老师是这样解释，但我还是不懂）
  // constructor(parentModule: CoreModule) {
  //   if (parentModule) {
  //     throw new Error('CoreModule 只能被父级appModule引用');
  //   }
  // }
  // 但上面的代码有些问题，他是注入自己，会导致无线循环，解决办法，使用@skipSelf装饰器。
  // @skipSelf装饰器的作用，我在查找CoreModule时，跳过我自己（CoreModule这个大文件），去父module里找是否存在CoreModule
  // angular的执行机制：如果没有找到CoreModule，就会抛出一个错误，
  // 但是，在我们第一次注入时，CoreModule是肯定不存在的，所以，我们要允许CoreModule是不存在的，
  // 这时，用@Optional这个装饰器。当CoreModule不存在时，就不会抛错了，而是给parentModule赋值为null了
  constructor( @SkipSelf() @Optional()  parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule 只能被父级appModule引用');
    }
  }
 }
