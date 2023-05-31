import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactformPageRoutingModule } from './reactform-routing.module';
// import { ViewformComponent } from '../viewform/viewform.component';
import { MyformComponent } from '../myform/myform.component';
import { ReactformPage } from './reactform.page';
// import { MyHeaderComponent } from '../my-header/my-header.component';
import { MyHeaderModule } from '../my-header/my-header.component.module';
// import { UpdateformComponent } from '../updateform/updateform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactformPageRoutingModule,
    ReactiveFormsModule,
    MyHeaderModule
  ],
  // declarations: [ReactformPage,MyformComponent,ViewformComponent, UpdateformComponent]
    declarations: [ReactformPage,MyformComponent]
})
export class ReactformPageModule {}
