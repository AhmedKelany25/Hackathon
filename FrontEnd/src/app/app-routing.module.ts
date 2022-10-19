import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DesignsComponent } from './designs/designs.component';

const routes: Routes = [
  { path:  'designs', component:  DesignsComponent},
  { path:  'accounts', component:  AccountsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
