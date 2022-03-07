import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { SuperheroesYVillanosComponent } from './superheroes-y-villanos/superheroes-y-villanos.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { VillanosComponent } from './villanos/villanos.component';

SuperheroesYVillanosComponent;
const routes: Routes = [
  {
    path: 'superheroes-y-villanos',
    component: SuperheroesYVillanosComponent,
  },
  {
    path: 'superheroes',
    component: SuperheroesComponent,
  },
  {
    path: 'villanos',
    component: VillanosComponent,
  },
  {
    path: '**',
    redirectTo: 'superheroes-y-villanos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
