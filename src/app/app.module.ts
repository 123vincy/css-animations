import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimationsComponent } from './animations/animations.component';
import { ButtonHoverEffectsComponent } from './button-hover-effects/button-hover-effects.component';
import { ImageHoverEffectsComponent } from './image-hover-effects/image-hover-effects.component';
import { MenuHoverEffectsComponent } from './menu-hover-effects/menu-hover-effects.component';
import { CardHoverEffectsComponent } from './card-hover-effects/card-hover-effects.component';
import { CsstransformsComponent } from './csstransforms/csstransforms.component';
import { AnimationsPart1Component } from './animations.part1/animations.part1.component';
import { LoadersComponent } from './loaders/loaders.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimationsComponent,
    ButtonHoverEffectsComponent,
    ImageHoverEffectsComponent,
    MenuHoverEffectsComponent,
    CardHoverEffectsComponent,
    CsstransformsComponent,
    AnimationsPart1Component,
    LoadersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
