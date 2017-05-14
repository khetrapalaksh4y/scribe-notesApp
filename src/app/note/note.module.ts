import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NoteRoutingModule } from './note-routing.module';
import { NoteComponent } from './note/note.component';
import { NoteService } from './note.service';

@NgModule({
  imports: [
    CommonModule,
    NoteRoutingModule,
    FormsModule
  ],
  declarations: [NoteComponent],
  providers: [NoteService]
})
export class NoteModule { }
