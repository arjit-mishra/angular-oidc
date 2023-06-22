import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {OAuthModule, JwksValidationHandler, ValidationHandler, OAuthStorage} from "angular-oauth2-oidc";
import {HttpClientModule} from "@angular/common/http";
import {AppService} from "./app.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:8091/'],
        sendAccessToken: true
      }
    }),
  ],
  providers: [
    AppService,
    { provide: ValidationHandler, useClass: JwksValidationHandler },
    { provide: OAuthStorage, useValue: localStorage },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
