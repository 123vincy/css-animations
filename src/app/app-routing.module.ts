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
