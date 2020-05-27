import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import {ZXingScannerModule } from '@zxing/ngx-scanner';
import {NgxQRCodeModule    } from 'ngx-qrcode2';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ZXingScannerModule,
    NgxQRCodeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
