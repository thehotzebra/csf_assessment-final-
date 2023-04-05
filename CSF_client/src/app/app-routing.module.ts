import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchReviewComponentComponent } from './component/search-review-component.component';
import { MovieReviewsListComponentComponent } from './component/movie-reviews-list-component.component';
import { PostCommentComponentComponent } from './component/post-comment-component.component';

const routes: Routes = [

  { path:'', component: SearchReviewComponentComponent },
  { path:'movie', component: MovieReviewsListComponentComponent },
  { path:'comment', component: PostCommentComponentComponent },
  // { path: '**', redirectTo: '/', pathMatch: 'full' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
