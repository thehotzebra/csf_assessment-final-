import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchReviewComponentComponent } from './component/search-review-component.component';
import { MovieReviewsListComponentComponent } from './component/movie-reviews-list-component.component';
import { PostCommentComponentComponent } from './component/post-comment-component.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchReviewComponentComponent,
    MovieReviewsListComponentComponent,
    PostCommentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
