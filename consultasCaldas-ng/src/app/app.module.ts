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
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ParametrosModule } from './modules/parametros/parametros.module';
import { FormsModule } from '@angular/forms';
import { ChartModule, LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { BarSeriesService, StackingBarSeriesService } from '@syncfusion/ej2-angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    InternalServerErrorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ParametrosModule,
    ChartModule
  ],
  providers: [LineSeriesService, CategoryService, LegendService, DataLabelService, TooltipService, BarSeriesService, StackingBarSeriesService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
