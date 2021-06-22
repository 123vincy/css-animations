import { CardHoverEffectsComponent } from './card-hover-effects/card-hover-effects.component';
import { MenuHoverEffectsComponent } from './menu-hover-effects/menu-hover-effects.component';
import { ImageHoverEffectsComponent } from './image-hover-effects/image-hover-effects.component';
import { AnimationsComponent } from './animations/animations.component';
import { ButtonHoverEffectsComponent } from './button-hover-effects/button-hover-effects.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    component: AnimationsComponent,
  },
  {
    path: 'button-hover-effects',
    component: ButtonHoverEffectsComponent,
  },
  {
    path: 'image-hover-effects',
    component: ImageHoverEffectsComponent,
  },
  {
    path: 'menu-hover-effects',
    component: MenuHoverEffectsComponent,
  },
  {
    path: 'card-hover-effects',
    component: CardHoverEffectsComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
