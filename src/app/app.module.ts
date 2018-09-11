import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuartoModule } from './quarto/quarto.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    QuartoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
