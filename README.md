# Result-Management-Application
A “Result Managment Application” using Angular and Node.<br/>
• Two types of users can login to application by clicking a button on homepage.<br/>
• Students can enter their roll number and date of birth to view their result.<br/>
• If roll number and D.O.B. does not match, an error should be shown on screen.<br/>
• Teachers can View all records, add new record, edit and delete the records.<br/>

# Setup Guide 

## Database 
1. Open your MySQL Workbench and run the below SQL script
```
create database resultdb;

use resultdb;

create table student (rollno int not null primary key ,name varchar(30), dob date, score int);

create table teacher (uname varchar(36) not null primary key, pass varchar(64));

desc student;
desc teacher;

insert into student values (103, "Tony", "1979-11-27", 412);

insert into teacher values ("admin", "test");
```
  
## Backend 
1. Open the project in Visual Studio Code.
2. Go to toolbar --> terminal --> Open new terminal.
3. Run `cd backend` to change the directory to backend.
4. Run `npm install` and `npm install -g nodemon`.
5. Now to run the backend of the project --> Run `nodemon app.js` on terminal.
  
## Frontend
1. Open the project in Visual Studio Code.
2. Go to toolbar --> terminal --> Open new terminal.
3. Run `cd frontend` to change the directory to frontend.
4. Run `npm install` to install the required packages.
5. Now to run the frontend of the project --> Run `ng serve` on terminal.
6. Open URL "https://localhost:4200" on a browser.

# Screen-Shots 

## HomePage 
![image](https://github.com/Ghanshyam89/ResultManagementSystem/assets/63035436/989df587-a1c0-4ac8-9ba5-c8b8ebc7d61b)

## Teacher Login 
![image](https://github.com/Ghanshyam89/ResultManagementSystem/assets/63035436/fe71f43e-a37d-4e4b-9f79-e77267fdc78a)

## Teacher dashboard
![image](https://github.com/Ghanshyam89/ResultManagementSystem/assets/63035436/bfa3bbad-f901-4691-806c-5a2ee2cd9c15)

## Add student result
![image](https://github.com/Ghanshyam89/ResultManagementSystem/assets/63035436/37a80161-a35e-4c75-b7a6-7514cafb3f5c)

## Student Login
![image](https://github.com/Ghanshyam89/ResultManagementSystem/assets/63035436/63417afc-263f-4806-b3b2-2b9da29ef51e)

## Student result
![image](https://github.com/Ghanshyam89/ResultManagementSystem/assets/63035436/b9e0317a-4d55-47a8-ab72-b27f22f2dcff)
