import { Routes } from '@angular/router';
import {BoardComponent} from './components/board/board.component';
import {CoreComponent} from './components/core/core.component';

export const routes: Routes = [
  {
    path: 'start',
    component: CoreComponent
  },
  {
    path: 'play',
    component: BoardComponent
  },
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'start',
    pathMatch: "full"
  }
];
