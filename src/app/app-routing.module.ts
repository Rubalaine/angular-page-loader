import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { 
    path: 'second-page', 
    loadChildren: () => import('./second-page/second-page.module').then(m => m.SecondPageModule) 
  },
  { 
    path: 'third-page', 
    loadChildren: () => import('./third-page/third-page.module').then(m => m.ThirdPageModule) 
  },
  { 
    path: 'first-page', 
    loadChildren: () => import('./first-page/first-page.module').then(m => m.FirstPageModule) 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
