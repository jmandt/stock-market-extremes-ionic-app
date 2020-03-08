import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TickerItemComponent} from './ticker-item/ticker-item.component';
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [TickerItemComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [TickerItemComponent]
})
export class SharedModule { }
