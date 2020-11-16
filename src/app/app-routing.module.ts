import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FavComponent } from './Components/fav/fav.component';
import { LoginComponent } from './Components/login/login.component';

import { RecommendationComponent } from './Components/recommendation/recommendation.component';
import { RegisterComponent } from './Components/register/register.component';
import { StatsComponent } from './Components/stats/stats.component';
import { AuthGuard } from './gards/auth.guard';
import { LogGuard } from './gards/log.guard';

const routes: Routes = [
  {path: 'dash', component:DashboardComponent},
  {path: 'stat', component:StatsComponent},
  {path: 'login',component:LoginComponent,canActivate:[LogGuard]},
  {path: 'register',component:RegisterComponent,canActivate:[LogGuard]},
  
  {path: 'fav',component:FavComponent,canActivate:[AuthGuard]},
  {path:'recommend',component:RecommendationComponent},
  
  {path:'about',component:AboutusComponent},
  {path: '', redirectTo: '/dash', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
