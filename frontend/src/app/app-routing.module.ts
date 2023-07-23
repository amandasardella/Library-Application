import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import for routing purpose
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BookListComponent } from './components/book-list/book-list.component';

//define route for app-routing.module.ts
const routes: Routes = [{path: '', redirectTo: 'books', pathMatch: 'full'}, //display the book list as default
{path: 'books', component: BookListComponent},
{path: 'books/:id', component: BookDetailsComponent},
{path: 'add', component: AddBookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
