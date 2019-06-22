import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { 
    path: '', pathMatch: 'full', component : RegisterComponent },
    {path: 'showList', pathMatch: 'full', component : DisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
