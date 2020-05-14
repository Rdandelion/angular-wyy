import { Component, OnInit, TemplateRef, ViewChild, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  // 因为轮播组件比较简单，这里改变一下变更策略
  // 只有当@input输入属性发生改变时，这个组件才会进行变更检测
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex: any;
  // TemplateRef是什么类型
  // angular8之后 viewChild有两个参数 第一个是dom节点 第二个是查询时间（变更前去解析还是变更后去解析）
  @ViewChild('dot', { static: true }) dotRef: TemplateRef<any>;
  // @Output()  ChangeSlide = new EventEmitter<string>(); 改进一下，严谨代码
  // 只接受pre 或 next
  @Output()  ChangeSlide = new EventEmitter<'pre' | 'next'>();
  constructor() { }

  ngOnInit(): void {
  }
  // 改进 'pre' | 'next'
  // onChangeSlide(type: string ) {
    onChangeSlide(type: 'pre' | 'next' ) {
    this.ChangeSlide.emit(type);
  }

}
