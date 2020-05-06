import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselComponent } from './carousel/carousel.component';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    ContentComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule, 
    BrowserAnimationsModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
