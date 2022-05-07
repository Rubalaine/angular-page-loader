import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdPageRoutingModule } from './third-page-routing.module';
import { ThirdPageComponent } from './third-page.component';


@NgModule({
  declarations: [
    ThirdPageComponent
  ],
  imports: [
    CommonModule,
    ThirdPageRoutingModule
  ]
})
export class ThirdPageModule { }
