import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GradientComponent } from './gradient/gradient.component';
import { ColorsComponent } from './colors/colors.component';
import { ColorComponent } from './color/color.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import { StoreModule } from '@ngrx/store';
import {gradientReducer} from "./reactive statement/reducers/gradient.reducer";

@NgModule({
  declarations: [
    AppComponent,
    GradientComponent,
    ColorsComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    StoreDevtoolsModule,
    StoreModule.forRoot({gradient: gradientReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
