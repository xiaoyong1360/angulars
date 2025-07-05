import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { dummyTasks } from '../dummy-tasks'

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  @Input({ required: true }) name!: string;
  @Input({ required: true }) userId!: string;

  tasks = dummyTasks;

  get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.userId );
  }

  onCompleteTask(id: string){
    alert(id);
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

}
