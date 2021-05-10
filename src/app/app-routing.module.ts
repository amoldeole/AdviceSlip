import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdviceComponent } from './components/advice/advice.component';

const routes: Routes = [
  { path: '', redirectTo: 'advice', pathMatch: 'full' },
  { path: 'advice', loadChildren: () => import('./components/advice/advice.module').then(m => m.AdviceModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
