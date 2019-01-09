import { APP_BASE_HREF } from '@angular/common'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloAngularComponent } from './hello-angular/hello-angular.component'
import { NestedComponent } from './nested/nested.component'

const routes: Routes = [
  {
    path: '',
    component: HelloAngularComponent,
  },
  {
    path: 'nested',
    component: NestedComponent,
  },
];

@NgModule({
  providers: [
    {provide: APP_BASE_HREF, useValue: '/hi'},
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
