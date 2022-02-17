import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathFunctionsModule } from './math-functions-module/math-functions.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MathFunctionsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
