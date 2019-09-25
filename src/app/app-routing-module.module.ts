import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponentComponent } from './main-component/main-component.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [],

   imports: [
    RouterModule.forRoot([
      { path: 'home', component: MainComponentComponent },
      { path: 'login', component: LoginComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModuleModule { }