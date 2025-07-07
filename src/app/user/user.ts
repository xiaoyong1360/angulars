import { Component, computed, EventEmitter, input, Input, output, Output } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";
import { Usert } from './user.model';
import { Card } from "../shared/card/card";

const randomeIndex = Math.floor(Math.random() * DUMMY_USERS.length);


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({ required: true}) user!: Usert; 
  @Input({ required: true}) selected!: boolean;
  @Output() select = new EventEmitter();

  get imagePath() {return 'assets/users/' + this.user.avatar;}

  onSelectUser(){   
    this.select.emit(this.user.id);
  }
}
