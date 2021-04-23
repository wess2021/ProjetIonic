import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'navbar',
    loadChildren: () => import('./navbar/navbar.module').then( m => m.NavbarPageModule)
  },
  {
    path: 'employe',
    loadChildren: () => import('./employe/employe.module').then( m => m.EmployePageModule)
  },
  {
    path: 'add-employe',
    loadChildren: () => import('./add-employe/add-employe.module').then( m => m.AddEmployePageModule)
  },
  {
    path: 'update-employe/:id',
    loadChildren: () => import('./update-employe/update-employe.module').then( m => m.UpdateEmployePageModule)
  },
  {
    path: 'materials',
    loadChildren: () => import('./materials/materials.module').then( m => m.MaterialsPageModule)
  },
  {
    path: 'update-material/:id',
    loadChildren: () => import('./update-material/update-material.module').then( m => m.UpdateMaterialPageModule)
  },
  {
    path: 'add-material',
    loadChildren: () => import('./add-material/add-material.module').then( m => m.AddMaterialPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'details-material/:id',
    loadChildren: () => import('./details-material/details-material.module').then( m => m.DetailsMaterialPageModule)
  },
  {
    path: 'details-employe/:id',
    loadChildren: () => import('./details-employe/details-employe.module').then( m => m.DetailsEmployePageModule)
  },
  {
    path: 'search-employe',
    loadChildren: () => import('./search-employe/search-employe.module').then( m => m.SearchEmployePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
