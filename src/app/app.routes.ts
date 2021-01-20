import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from 'src/app/components/home/home.component';
import { BarberiasComponent } from 'src/app/components/barberias/barberias.component';
import { AboutComponent } from 'src/app/components/about/about.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'barberias', component: BarberiasComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
]; // sets up routes constant where you define your routes

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash:true });