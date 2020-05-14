import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from './services.module';
import { Observable } from 'rxjs';
import { Banner, HotTags, SongSheet } from './data-types.ts/common.types';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
@Injectable({
  // 1、providedIn: 'root'
  providedIn: ServicesModule
})
// providedInde 意思是 本service 是哪个模块提供的
// root就是默认是appMoudle提供的
// 所以，我们可以把root改为ServicesModule
export class HomeService {
// 5、注入API_CONFIG 用@Inject这个装饰器,这样就可以用this.uri代替
  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }
  // 3、自己写的函数 获取轮播的函数 banner数据类型在common里定义了http://localhose:3000/
  getBanners(): Observable<Banner[]> {
    // 2、返回的是string，但我们定义的是banner类型，因此，用到pipe里的map
    return this.http.get( this.uri + 'banner').pipe(map((res: any) => res.banners));
    // 4、banners不是我们定义的，是返回的数据包含在banner{}里
    // 老师的写法：res: {banner: Banner[]} 我用any代替了
  }
  // 热门歌单分类方法
  getHotTags(): Observable<HotTags[]> {
    // 首页就显示了5个，所以，我们要在这里截取5个就行
    // 首先，先进行排序，sort方法
    return this.http.get( this.uri + 'playlist/hot').pipe(map((res: any) => {
      return res.tags.sort((x: HotTags, y: HotTags) => {
        return x.position - y.position;
      }).slice(0, 5);
    }));
  }
  // 获取歌单
  getPersonSheetList(): Observable<SongSheet[]> {
    // 因为首页就有16个歌单，所以，这里我们就要16个
    return this.http.get( this.uri + 'personalized').pipe(map((res: any) => res.result.slice(0, 16)));
  }
}
