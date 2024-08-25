import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
// import { LoginRoutingModule } from './main-routing.module';

import { ChatComponent } from '@shared/components/chat/chat.component';

@NgModule({
  declarations: [
    MainComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    // LoginRoutingModule
  ]
})

export class LoginModule {}