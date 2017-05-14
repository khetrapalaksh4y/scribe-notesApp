import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class NoteService {

  constructor() { }
  
  notes: Note[] = [
    {id: 1, note: "First Default Note", user_id: 1},
    {id: 2, note: "Second Default Note", user_id: 2}
  ]
  
  _getCurrentUserId() {
    var currentUser = localStorage.getItem("user");
    return JSON.parse(currentUser).id;
  }
  
  addNote(note) {
    note.id = this.notes[this.notes.length - 1].id + 1;
    note.user_id = this._getCurrentUserId();
    this.notes.push(note);
  }
}
