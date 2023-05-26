import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentResultComponent } from './add-student-result/add-student-result.component';
import { EditStudentResultComponent } from './edit-student-result/edit-student-result.component';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { TeacherLoginComponent } from './teacher-login/teacher-login.component';
import { ViewallComponent } from './view-all-details/view-all-details.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentResultComponent,
    EditStudentResultComponent,
    HomeComponent,
    StudentLoginComponent,
    TeacherLoginComponent,
    ViewallComponent,
    ViewResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
