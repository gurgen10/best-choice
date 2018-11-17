import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    SideBarComponent
  ],
  exports:[
    SideBarComponent,
    TranslateModule
  ]
})
export class SharedModule { }
