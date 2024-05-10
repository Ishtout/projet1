import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { DemoComponent } from './profil/components/demo/demo.component';
import { Demo1Component } from './profil/components/demo1/details.component';
import { ConnexionComponent } from './profil/components/connexion/connexion.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailComponent } from './profil/components/detail/detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DemoComponent,
    Demo1Component,
    ConnexionComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
