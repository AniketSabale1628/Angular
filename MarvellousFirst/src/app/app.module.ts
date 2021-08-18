import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { FirstCOmponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    FirstCOmponentComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
