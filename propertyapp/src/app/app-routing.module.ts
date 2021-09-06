import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QuoteComponent } from './quote/quote.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'view/:id', component: ViewComponent},
  { path: 'add', component: AddComponent},
  { path: 'quote', component: QuoteComponent},
  { path: 'search/state/:state/city/:city', component: SearchComponent},
  { path: 'search/state/:state', component: SearchComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
