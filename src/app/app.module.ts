import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './home/form/form.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';

const routes:Routes = [
  {path:'home', loadChildren:() => import('./home/home.module').then(m => m.HomeModule)},
  {path: '**', redirectTo:'home'}
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
