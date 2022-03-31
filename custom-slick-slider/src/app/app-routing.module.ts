import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SBComponent } from './s2/sb.component';
import { AppComponent } from './app.component';

const routes: Routes = [

  { path: 'slick-slider', component: SBComponent },
  { path: '', component: AppComponent },
  { path: '**', redirectTo: ' ', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
