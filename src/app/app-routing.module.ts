import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MembersComponent } from './members/members.component';
import { CoursesComponent } from './courses/courses.component';
import { CoordinatorsComponent } from './coordinators/coordinators.component';


const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'members', component: MembersComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'coordinators', component: CoordinatorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
