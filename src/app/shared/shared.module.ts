import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    IonicModule,
  ],
  exports: [
    MenuComponent,
    HeaderComponent,
    FormsModule,
    IonicModule,
  ]
})
export class SharedModule { }
