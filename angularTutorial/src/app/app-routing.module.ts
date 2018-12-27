import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Để xác định được định hướng khi chuyển trang ta cần import các component
import { PeoplesComponent } from './peoples/peoples.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PeopleDetailComponent } from './people-detail/people-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: PeopleDetailComponent},
  { path: 'peoples', component: PeoplesComponent },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
