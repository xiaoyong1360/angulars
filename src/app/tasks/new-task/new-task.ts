import { Component, EventEmitter, inject, Output, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service2';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({ required: true}) userId! : string;
  @Output() close = new EventEmitter<void>();

  enteredTitle = ('');
  enteredSummary = ('');
  enteredDate = ('');
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  tasksService = inject(TasksService);

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
    alert("h2h3");
    // this.add.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // });
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }, this.userId);
    this.close.emit();

  }
}
