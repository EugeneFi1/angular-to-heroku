import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DrawComponent} from './draw/draw.component';
import {TestComponent} from './test/test.component';

const routes: Routes = [
  {path: 'draw', component: DrawComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
