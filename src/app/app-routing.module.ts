import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { MembersComponent } from './members/members.component';
import { CoursesComponent } from './courses/courses.component';
import { CoordinatorsComponent } from './coordinators/coordinators.component';
import { MemberComponent } from './members/member/member.component';
import { CourseComponent } from './courses/course/course.component';
import { CoordinatorComponent } from './coordinators/coordinator/coordinator.component';
import { ChangeMemberComponent } from './members/change-member/change-member.component';
import { ChangeCourseComponent } from './courses/change-course/change-course.component';
import { ChangeCoordinatorComponent } from './coordinators/change-coordinator/change-coordinator.component';
import { NewMemberComponent } from './members/new-member/new-member.component';
import { NewCourseComponent } from './courses/new-course/new-course.component';


const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'members', component: MembersComponent },
  { path: 'members/:id', component: MemberComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'courses/:id', component: CourseComponent },
  { path: 'coordinators', component: CoordinatorsComponent },
  { path: 'coordinators/:memberID', component: CoordinatorComponent },
  { path: 'members/change/:id', component: ChangeMemberComponent },
  { path: 'courses/change/:id', component: ChangeCourseComponent },
  { path: 'coordinators/change/:memberID', component: ChangeCoordinatorComponent },
  { path: 'new-member', component: NewMemberComponent },
  { path: 'new-course', component: NewCourseComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
