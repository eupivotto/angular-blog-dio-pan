import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { SinglePageComponent } from './modules/pages/single-page/single-page.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },

    {
        path: 'single-post/:id',
        component: SinglePageComponent,
    }
];
