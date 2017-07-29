import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MylistComponent } from './mylist/mylist.component';
import { ShowitemComponent } from './showitem/showitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MylistComponent,
    ShowitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
