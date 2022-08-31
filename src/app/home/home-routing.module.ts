import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'', component: FormComponent},
//  {path:'flexbox', component: FlexboxComponent},
  {path:'**', redirectTo:'form'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
