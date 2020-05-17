import { BrowserModule         } from '@angular/platform-browser';
import { NgModule              } from '@angular/core';

import { AppRoutingModule      } from './app-routing.module';
import { AppComponent          } from './app.component';
import { FormsModule           } from '@angular/forms';

import {NgxQRCodeModule,         } from 'ngx-qrcode2';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxQRCodeModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
