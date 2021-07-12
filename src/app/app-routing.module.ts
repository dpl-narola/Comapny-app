import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyComponent } from './company/company/company.component';


const routes: Routes = [
  
  {
    path: '',
    component: CompanyListComponent
  },
  {
    path: 'new-company',
    component: CompanyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
