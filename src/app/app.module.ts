import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './home/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './user-info/table/table.component';

const routes:Routes = [
  {path:'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},
  {path:'user-info', loadChildren:()=> import('./user-info/user-info.module').then(m=> m.UserInfoModule)},
  {path: '**', redirectTo:'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
