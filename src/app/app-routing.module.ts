import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Access404Component } from '././components/access404/access404.component';
import { Error404Component } from '././components/error404/error404.component';
import { AlternativeContentComponent } from '././components/alternative-content/alternative-content.component';

const routes: Routes = [];
const appRoutes: Routes = [
  { path: 'welcome404', component: Access404Component },
  { path: 'alternative404', component: AlternativeContentComponent },
  { path: '', redirectTo: '/welcome404', pathMatch: 'full'  },
  { path: '**', component: Error404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
