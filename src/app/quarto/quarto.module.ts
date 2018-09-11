import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuartoService } from './quarto.service';
import { ViewComponent } from './view/view.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { SofaComponent } from './sofa/sofa.component';
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  declarations: [ViewComponent, SofaComponent],
  providers: [
    QuartoService
  ],
  exports: [
    ViewComponent
  ]
})
export class QuartoModule { }
