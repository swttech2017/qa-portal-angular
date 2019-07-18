import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {SelfReflectionHistoryComponent} from './self-reflection-history/self-reflection-history.component';
import {SelfReflectionFormComponent} from './self-reflection-form/self-reflection-form.component';

const routes: Routes = [
  {
    path: 'trainee/self-rating',
    component: AppComponent,
    children: [
      {
        path: 'home', component: SelfReflectionHistoryComponent
      },
      {
        path: 'current', component: SelfReflectionFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
