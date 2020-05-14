import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
  ],
  bootstrap: [AppComponent]
})
// 什么东西都给core模块了，app就只管core了
export class AppModule { }
