import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bookstore',
    loadChildren: () => import('./bookstore/bookstore.module').then(m => m.BookstoreModule)
  },
  {
    path: '',
    redirectTo: '/bookstore',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/bookstore',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
