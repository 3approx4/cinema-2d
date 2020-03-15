import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionPageComponent } from './pages/action-page/action-page.component';


const routes: Routes = [
  { path: "home", component: ActionPageComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
