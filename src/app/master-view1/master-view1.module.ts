import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterView1RoutingModule } from './master-view1-routing.module';
import { MasterView1Component } from './master-view1.component';
import { View11Component } from './view11/view11.component';
import { View21Component } from './view21/view21.component';
import { View31Component } from './view31/view31.component';
import { IgxNavbarModule, IgxButtonModule, IgxRippleModule, IgxToggleModule, IgxIconModule, IgxNavigationDrawerModule, IgxAvatarModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MasterView1Component,
    View11Component,
    View21Component,
    View31Component
  ],
  imports: [
    CommonModule,
    MasterView1RoutingModule,
    IgxNavbarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxToggleModule,
    IgxIconModule,
    IgxNavigationDrawerModule,
    IgxAvatarModule,
    FormsModule
  ]
})
export class MasterView1Module {
}
