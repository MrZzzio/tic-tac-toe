import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { QuadService } from './quad.service';
import { GameService } from './game.service';
import { BotService } from './bot.service';


@NgModule({
  declarations: [
    AppComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [QuadService,
              GameService,
              BotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
