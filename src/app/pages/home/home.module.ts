import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { WyCarouselComponent } from './components/wy-carousel/wy-carousel.component';

@NgModule({
  declarations: [HomeComponent, WyCarouselComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgZorroAntdModule,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
