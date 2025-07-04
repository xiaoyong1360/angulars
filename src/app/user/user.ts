import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

const randomeIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true}) id!: string;
  @Input({ required: true}) avatar!: string;
  @Input({ required: true}) name!: string;
  @Output() select = new EventEmitter();
  // select = output<string>();


  get imagePath() {return 'assets/users/' + this.avatar;}

  onSelectUser(){   
    this.select.emit(this.id);
  }
}
