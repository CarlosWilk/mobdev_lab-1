import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'characters',
        children: [
          {
            path: '',
            loadChildren: () => import('../characters/characters.module').then( m => m.CharactersPageModule)
          },
           {
            path: ':id',
            loadChildren: () => import('../character-details/character-details.module').then( m => m.CharacterDetailsPageModule)
          }
        ]
      },
  {
    path: 'death-count',
    children: [
      {
        path: '',
        loadChildren: () => import('../death-count/death-count.module').then( m => m.DeathCountPageModule)
      },
      // {
      //   path: ':id',
      //   loadChildren: () => import('../specimen-details/specimen-details.module').then( m => m.SpecimenDetailsPageModule)
      // }
    ]
},
{
  path: 'episodes',
  children: [
    {
      path: '',
      loadChildren: () => import('../episodes/episodes.module').then( m => m.EpisodesPageModule)
    },
    // {
    //   path: ':id',
    //   loadChildren: () => import('../spaceship-details/spaceship-details.module').then( m => m.SpaceshipDetailsPageModule)
    // }
  ]
}
    ]
  },
  {
    path: 'quotes',
    children: [
      {
        path: '',
        loadChildren: () => import('../quotes/quotes.module').then( m => m.QuotesPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/characters',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
