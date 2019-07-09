import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeViewComponent} from './home-view/home-view.component';

const routes: Routes = [
  {
    path: 'qa/portal/home',
    component: AppComponent,
    children: [
      {
        path: 'view', component: HomeViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
