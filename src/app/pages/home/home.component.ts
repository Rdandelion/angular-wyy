import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  @ViewChild(NzCarouselComponent, { static: true }) private nzCarousel: NzCarouselComponent;
  public carouselActiveIndex: any = 0;
  public array: any;
  constructor( private homeService: HomeService ) {
    this.getBanner();
    this.getHotTags();
    this.getPersonSheetList();
  }
  ngOnInit(): void {}
  // 轮播图的数据
  private getBanner() {
    this.homeService.getBanners().subscribe((res: any) => {
      this.array = res;
    });
  }
  private getHotTags() {
    this.homeService.getHotTags().subscribe((res: any) => {
      console.log(res);
    });
  }
  private getPersonSheetList() {
    this.homeService.getPersonSheetList().subscribe((res: any) => {
      console.log(res);
    });
  }
  // 结构赋值 接收to
  onBeforChange({to}) {
    // 每次轮播图片发生变化，就更新这个值
    // 思想：nzBeforeChange方法是获得下张图片得索引号，然后赋值给carouselActiveIndex，这个carouselActiveIndex有通过父子传值给了子组件（ [activeIndex]='carouselActiveIndex'），
    // 子组件通过 @Input()来接收，子组件再去操作
    this.carouselActiveIndex = to;
  }
  onChangeSlide(type: 'pre' | 'next') {
    // 大概思想：这个是子组件调用父组件方法，子组件先写好方法，并通过事件传递一个值this.ChangeSlide.emit(type)，父组件在html页面接收这个事件，并重新赋予新函数，写逻辑
    // 有一点要明确，这个过程实现的是  点击左右按钮，就切换轮播图。切换轮播图的函数在Zorro里是next()和pre()两个函数，所以，我们是通过点击事件通知父级，父级再执行这两个函数
    // 无论是在子组件里还是父组件里，左右点击事件都是一个函数，？？？？好像是通过子组件的点击事件参数来决定是next还是pre，在父组件里给next和pre加上（），变为执行事件。哎呀，越分析越觉得有道理。
    // @ViewChild是获取dom节点的一种方式 NzCarouselComponent是轮播图节点 此处的轮播图可视为一个子组件
    // this.nzCarousel[type]();的意思是 执行这个轮播图（子组件）的哪个方法  这里不用this.nzCarousel.type()，是因为[]里可以代指某个方法或属性，.是确定的某个方法或属性
    this.nzCarousel[type]();
  }

}
