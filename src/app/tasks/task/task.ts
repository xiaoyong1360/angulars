import { Component, Input } from '@angular/core';
import { type TaskIn } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
  @Input() task!: TaskIn;

}
