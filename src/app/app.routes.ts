import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'slides',
    pathMatch: 'full', 
  },
  {
    path: 'auth',
    loadChildren: () => import('./authenticate/auth.route').then( m => m.routes)
  },

  {
    path: 'app',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'slides',
    loadComponent: () => import('./welcome/slides/slides.page').then( m => m.SlidesPage)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./welcome/bienvenu/bienvenu.page').then( m => m.BienvenuPage)
  },
  // {
  //   path: 'liste-points',
  //   loadComponent: () => import('./pages/liste-points/liste-points.page').then( m => m.ListePointsPage)
  // },
  // {
  //   path: 'liste-details',
  //   loadComponent: () => import('./pages/liste-details/liste-details.page').then( m => m.ListeDetailsPage)
  // },
  // {
  //   path: 'listes-recyclages',
  //   loadComponent: () => import('./pages/listes-recyclages/listes-recyclages.page').then( m => m.ListesRecyclagesPage)
  // },
  // {
  //   path: 'maping',
  //   loadComponent: () => import('./pages/maping/maping.page').then( m => m.MapingPage)
  // },
  // {
  //   path: 'detail-post',
  //   loadComponent: () => import('./pages/detail-post/detail-post.page').then( m => m.DetailPostPage)
  // },
  
  // {
  //   path: 'recommanded-post',
  //   loadComponent: () => import('./pages/recommanded-post/recommanded-post.page').then( m => m.RecommandedPostPage)
  // },
  // {
  //   path: 'validation-pay',
  //   loadComponent: () => import('./pages/validation-pay/validation-pay.page').then( m => m.ValidationPayPage)
  // },
  // {
  //   path: 'pay-pack',
  //   loadComponent: () => import('./pages/pay-pack/pay-pack.page').then( m => m.PayPackPage)
  // },
  
   
];
