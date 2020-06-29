import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CovidCheckListComponent } from './components/main/covid-check-list/covid-check-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/resultados', pathMatch: 'full' },
  { path: 'resultados', component: CovidCheckListComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
