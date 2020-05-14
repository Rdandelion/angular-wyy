import { NgModule, InjectionToken } from '@angular/core';
// 令牌 token  并导出，这样其他地方可以使用
export const API_CONFIG = new InjectionToken('ApiConfigToken');


@NgModule({
  declarations: [],
  imports: [
    // CommonModule
  ],
  providers: [
    // angular提供一个服务，服务里有个令牌provide：API_CONFIG，也可以直接写为provide：ApiConfigToken，只是这样有些不太好
    // 及令牌所对应的值这个值可能是字符串（http://localhose:3000/），也可能是个类
    { provide: API_CONFIG, useValue: 'http://localhost:3000/'}
  ]
})
export class ServicesModule { }
