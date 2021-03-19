import { ShowPostComponent } from './components/show-post/show-post.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'list', component: ListPostsComponent},
  {path: 'add', component: AddPostComponent},
  {path: 'show', component: ShowPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
