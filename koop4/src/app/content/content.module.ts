import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
