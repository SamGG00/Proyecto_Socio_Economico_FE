import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/template/navbar/navbar.component';
import { FooterComponent } from './public/template/footer/footer.component';
import { HeaderComponent } from './public/template/header/header.component';
import { NotFoundComponent } from './public/error/not-found/not-found.component';
import { InternalServerErrorComponent } from './public/error/internal-server-error/internal-server-error.component';
import { HomeComponent } from './public/general/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }