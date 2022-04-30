import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelojesComponent } from './Relojes/components/relojes/relojes.component';
import { CategoriaComponent } from './Relojes/pages/categoria/categoria.component';

const routes: Routes = [
  {
    path: '',
    component: RelojesComponent,
    pathMatch: 'full',
  },
  {
    path: 'categoria/:id',
    component: CategoriaComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
