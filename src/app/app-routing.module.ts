import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionPageComponent } from './pages/action-page/action-page.component';
import { NowOnScreenComponent } from './pages/now-on-screen/now-on-screen.component';
import { RentComponent } from './pages/rent/rent.component';


const routes: Routes = [
  { path: "home", component: ActionPageComponent },
  { path: "now-on-screen", component: NowOnScreenComponent },
  { path: "rent", component: RentComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
