import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUsersComponent } from './manage-components/all-users/all-users.component';
import { UserPreviewComponent } from './manage-components/user-preview/user-preview.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", component: AllUsersComponent },
];

@NgModule({
  declarations: [
   AllUsersComponent,
   UserPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule],
  bootstrap:[AllUsersComponent]
})
export class ManageModule { }
