import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
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
    MatCardModule,
    MatListModule,
    BrowserModule, 
    BrowserAnimationsModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
