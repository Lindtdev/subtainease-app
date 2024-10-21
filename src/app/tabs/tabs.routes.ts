import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('../pages/home/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'pack',
        loadComponent: () =>
          import('../pages/pack/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('../pages/stats/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'profil',
        loadComponent: () =>
          import('../pages/profil/tab4.page').then((m) => m.Tab4Page),
      },
     
      {
        path: 'become-publisher',
        loadComponent: () =>
          import('../pages/become-publisher/become-publisher.page').then((m) => m.BecomePublisherPage),
      },
      {
        path: 'publish',
        loadComponent: () =>
          import('../pages/publier/publier.page').then((m) => m.PublierPage),
      },
      {
        path: 'do-compaign',
        loadComponent: () =>
          import('../pages/do-compaign/do-compaign.page').then((m) => m.DoCompaignPage),
      },
      {
        path: 'pay-pack',
        loadComponent: () =>
          import('../pages/pay-pack/pay-pack.page').then((m) => m.PayPackPage),
      },
      {
        path: 'validation-pay',
        loadComponent: () =>
          import('../pages/validation-pay/validation-pay.page').then((m) => m.ValidationPayPage),
      },
      {
        path: 'detail-post',
        loadComponent: () =>
          import('../pages/detail-post/detail-post.page').then((m) => m.DetailPostPage),
      },
      {
        path: 'recommanded-post',
        loadComponent: () =>
          import('../pages/recommanded-post/recommanded-post.page').then((m) => m.RecommandedPostPage),
      },
 
      
    ],
  },

{
  path: '',
  redirectTo: 'app/home',
  pathMatch: 'full',
},
];

