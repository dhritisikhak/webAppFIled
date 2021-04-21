import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetDemoPageComponent } from './component/get-demo-page/get-demo-page.component';

const routes: Routes = [
  { path: "getDemo", component: GetDemoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
