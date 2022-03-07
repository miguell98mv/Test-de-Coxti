import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuperheroesYVillanosComponent } from './superheroes-y-villanos/superheroes-y-villanos.component';
import { SuperheroesComponent } from './superheroes/superheroes.component';
import { VillanosComponent } from './villanos/villanos.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperheroesYVillanosComponent,
    SuperheroesComponent,
    VillanosComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
