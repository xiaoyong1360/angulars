import { Component, Input } from '@angular/core';
import { type TaskIn } from './task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service2';

@Component({
  selector: 'app-task',
  imports: [DatePipe, Card],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task!: TaskIn;

  // private tasksService = inject(TasksService);

  constructor(private tasksService: TasksService){}

  onCompleteTask(){
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }

}
