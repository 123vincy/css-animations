import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationsComponent } from './animations/animations.component';
import { ButtonHoverEffectsComponent } from './button-hover-effects/button-hover-effects.component';
import { ImageHoverEffectsComponent } from './image-hover-effects/image-hover-effects.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    ButtonHoverEffectsComponent,
    ImageHoverEffectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
