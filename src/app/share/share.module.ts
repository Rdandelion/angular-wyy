import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
  ],
  // 因为这是共享模块，不导出的话，别人是无法使用的
  exports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
  ]
})
export class ShareModule { }
