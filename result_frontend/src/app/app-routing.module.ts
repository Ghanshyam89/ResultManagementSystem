import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { HomeComponent } from './home/home.component';
import { AddStudentResultComponent } from './add-student-result/add-student-result.component';
import { EditStudentResultComponent } from './edit-student-result/edit-student-result.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { ViewallComponent } from './view-all-details/view-all-details.component';

const routes: Routes = [
  {
    component:AddStudentResultComponent,
    path:'addstudent'
  },
  {
    component:EditStudentResultComponent,
    path:'edit/:rollno'
  },
  
  {
    component:StudentLoginComponent,
    path:'studentlogin'
  },
  {
    component:TeacherLoginComponent,
    path:'teacherlogin'
  },
  {
    component:ViewallComponent,
    path:'viewall'
  },
  {
    component:ViewResultComponent,
    path:'viewresult/:rollno'
  },
  {
    component:HomeComponent,
    path:''
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
