import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from "../dummy-users";

const randomeIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
    selectedUser = signal( DUMMY_USERS[randomeIndex]);
    imagePath = computed (() => "assets/users/" + this.selectedUser().avatar);

    onSelectUser(){
      // console.log('clicked.');
      this.selectedUser.set(DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)]);
    }
}
