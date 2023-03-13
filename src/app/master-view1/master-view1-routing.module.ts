import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterView1Component } from './master-view1.component';
import { View11Component } from './view11/view11.component';
import { View21Component } from './view21/view21.component';
import { View31Component } from './view31/view31.component';

const routes: Routes = [{ path: '', component: MasterView1Component, children: [{ path: 'view11', component: View11Component, data: { text: 'View 1 (1)' } }, { path: 'view21', component: View21Component, data: { text: 'View 2 (1)' } }, { path: 'view31', component: View31Component, data: { text: 'View 3 (1)' } }] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterView1RoutingModule {
}
