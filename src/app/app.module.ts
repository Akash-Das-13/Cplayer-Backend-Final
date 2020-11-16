import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ServiceService } from './services/service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StatsComponent } from './Components/stats/stats.component';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { RecommendationComponent } from './Components/recommendation/recommendation.component';
import { FavComponent } from './Components/fav/fav.component';

import { AuthService } from './services/auth.service';
import { FavService } from './services/fav.service';
import { AuthGuard } from './gards/auth.guard';
import { LogGuard } from './gards/log.guard';
import { RecommendService } from './services/recommend.service';
import { AboutusComponent } from './Components/aboutus/aboutus.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    StatsComponent,
    RecommendationComponent,
    FavComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ServiceService,AuthService,FavService,AuthGuard,LogGuard,RecommendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
