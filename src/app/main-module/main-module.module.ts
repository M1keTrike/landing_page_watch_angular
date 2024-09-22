import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContentComponent } from './main-content/main-content.component';
import { ColectionContentComponent } from './colection-content/colection-content.component';



@NgModule({
  declarations: [
    MainContentComponent,
    ColectionContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModuleModule { }
