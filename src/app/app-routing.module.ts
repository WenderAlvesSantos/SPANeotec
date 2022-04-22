import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { NossosServicosComponent } from './nossos-servicos/nossos-servicos.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [
      // AuthGuard
    ],
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
    ],
  },
  {
    path: 'quem-somos',
    component: QuemSomosComponent,
  },
  {
    path: 'nossos-servicos',
    component: NossosServicosComponent,
  }, {
    path: 'contato',
    component: ContatoComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
