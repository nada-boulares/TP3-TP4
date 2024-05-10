import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TasksListComponent } from'./components/tasks-list/tasks-list.component'; // Import Task List

import { TaskFormComponent } from
'./components/task-form/task-form.component'; 

@NgModule({
declarations: [
AppComponent,
TasksListComponent, 
TaskFormComponent 
],
imports: [
BrowserModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
