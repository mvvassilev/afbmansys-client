import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MembersComponent } from './members/members.component';
import { CoursesComponent } from './courses/courses.component';
import { CoordinatorsComponent } from './coordinators/coordinators.component';
import { MemberComponent } from './members/member/member.component';
import { CourseComponent } from './courses/course/course.component';
import { CoordinatorComponent } from './coordinators/coordinator/coordinator.component';


const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'members', component: MembersComponent },
  { path: 'members/:id', component: MemberComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: CourseComponent },
  { path: 'coordinators', component: CoordinatorsComponent },
  { path: 'coordinators/:id', component: CoordinatorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
