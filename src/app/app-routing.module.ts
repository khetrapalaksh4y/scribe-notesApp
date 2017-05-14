import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth'},
  { path: 'auth', loadChildren: 'app/authentication/authentication.module#AuthenticationModule'},
  { path: 'notes', loadChildren: 'app/note/note.module#NoteModule'},
  { path: "**", redirectTo: 'auth'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
