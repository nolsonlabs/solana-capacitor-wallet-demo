import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';

import { AuthorizeComponent } from '../components/authorize/authorize.component';
import { SignMessageComponent } from '../components/sign-message/sign-message.component';
import { SignTransactionComponent } from '../components/sign-transaction/sign-transaction.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,
                 AuthorizeComponent,
                 SignMessageComponent,SignTransactionComponent
                ],
})
export class HomePageModule {}
