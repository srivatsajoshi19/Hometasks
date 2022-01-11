import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActiveListComponent } from './modules/active/active-components/active-list/active-list.component';
import { DeletedListComponent } from './modules/deleted/deleted-components/deleted-list/deleted-list.component';
import { AllUsersComponent } from './modules/manage/manage-components/all-users/all-users.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "active", component: ActiveListComponent},
  {path: "deleted", component: DeletedListComponent},
  {path:"manage", loadChildren: ()=>import("./modules/manage/manage.module").then(module=>module.ManageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
