import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>()
  @Output() add = new EventEmitter<NewTaskData>()
  enteredTitle = ('');
  enteredSummary = ('');
  enteredDate = ('');
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancel(){
    this.cancel.emit();
  }

  onSubmit(){
    alert("hh");
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    })
  }
}
