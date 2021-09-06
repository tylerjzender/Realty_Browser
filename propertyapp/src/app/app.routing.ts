import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuoteComponent } from './quote/quote.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    { path: 'view', component: ViewComponent },
    { path: 'add', component: AddComponent },
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent},
    { path: 'quote', component: QuoteComponent},

    // otherwise redirect to pagenotfound
    { path: '**', component: PagenotfoundComponent }
];

export const appRoutingModule = RouterModule.forRoot(routes);