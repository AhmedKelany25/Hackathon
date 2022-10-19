import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DesignsComponent } from './designs/designs.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  { path:  'designs', component:  DesignsComponent},
  { path:  'accounts', component:  AccountsComponent},
  { path:  'modal', component:  ModalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
