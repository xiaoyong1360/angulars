import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks';
import { NewTask } from './new-task/new-task';
import { NewTaskData } from './task/task.model';

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

  tasks = dummyTasks;

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId );
  }

  onCompleteTask(id: string){
    alert(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancelAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData){
    this.tasks.unshift({
      id: new Date().getTime.toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false;
  }

}
