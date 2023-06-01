import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExchangerComponent} from "./pages/exchanger/exchanger.component";
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'exchange', component: ExchangerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
