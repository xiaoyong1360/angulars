import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service2';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;
  
  isAddingTask = false;


  constructor(private tasksService: TasksService){
  }


  get selectedUserTasks(){
    return this.tasksService.getUserTask(this.userId);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    // this.tasks.unshift({
    //   id: new Date().getTime.toString(),
    //   userId: this.userId,
    //   title: taskData.title,
    //   summary: taskData.summary,
    //   dueDate: taskData.date
    // })
    this.tasksService.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }

}
