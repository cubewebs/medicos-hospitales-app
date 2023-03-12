import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modulos
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages.routing';
import { AuthRoutingModule } from '../auth/auth.routing';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
	DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
  ],
  exports: [
	DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
	AccountSettingsComponent,
  ],
  imports: [
    CommonModule,
	RouterModule,
    PagesRoutingModule,
	AuthRoutingModule,
	SharedModule
  ]
})
export class PagesModule { }


