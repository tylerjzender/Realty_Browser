import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
    { path: 'view', component: ViewComponent },
    { path: 'add', component: AddComponent },
    { path: '', component: HomeComponent },

    // otherwise redirect to home
    { path: '**', component: PagenotfoundComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);