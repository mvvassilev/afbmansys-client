import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MembersComponent } from './members/members.component';
import { CoursesComponent } from './courses/courses.component';
import { CoordinatorsComponent } from './coordinators/coordinators.component';
import { MemberComponent } from './members/member/member.component';
import { CourseComponent } from './courses/course/course.component';
import { CoordinatorComponent } from './coordinators/coordinator/coordinator.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ChangeMemberComponent } from './members/change-member/change-member.component';
import { ChangeCourseComponent } from './courses/change-course/change-course.component';
import { ChangeCoordinatorComponent } from './coordinators/change-coordinator/change-coordinator.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginFormComponent,
    TopbarComponent,
    MembersComponent,
    CoursesComponent,
    CoordinatorsComponent,
    MemberComponent,
    CourseComponent,
    CoordinatorComponent,
    ChangeMemberComponent,
    ChangeCourseComponent,
    ChangeCoordinatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
