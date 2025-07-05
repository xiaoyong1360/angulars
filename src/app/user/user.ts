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
  @Input({ required: true}) user!: {
    id: string;
    avatar: string;
    name: string
  }

  @Output() select = new EventEmitter();

  get imagePath() {return 'assets/users/' + this.user.avatar;}

  onSelectUser(){   
    this.select.emit(this.user.id);
  }
}
