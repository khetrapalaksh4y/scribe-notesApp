import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NoteService } from '../note.service';
import { Note } from '../note';
import { User } from '../../user/user';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  constructor(private router: Router,
  private noteService: NoteService) { }
  
  note: string;
  notes: Note[] = this.noteService.notes;
  errorMessage: string;
  currentUser: User = JSON.parse(localStorage.getItem("user"));

  ngOnInit() {
    if(localStorage.getItem("user") === null)
    {
      this.router.navigate(['login']);
    }
  }
  
  addNote() {
    if(!this.note.length)
    {
      this.errorMessage = "Note cannot be empty";
      setTimeout(() => {
        this.errorMessage = "";
      }, 2500);
    }
    var noteObject = {note: this.note}
    this.noteService.addNote(noteObject);
    this.note = "";
  }
  
  logout() {
    localStorage.removeItem("user");
    this.router.navigate(['login']);
  }
}