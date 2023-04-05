import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { Result } from '../models';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movie-reviews-list-component',
  templateUrl: './movie-reviews-list-component.component.html',
  styleUrls: ['./movie-reviews-list-component.component.css']
})
export class MovieReviewsListComponentComponent implements OnInit {

  search!: any;
  results!: Result[]
  resultsSub!: Subscription

  constructor( private fb: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private movieSvc: AppService) {}

  ngOnInit(): void {

  this.activatedRoute.queryParams.subscribe(x => 
    {this.search = x
    this.movieSvc.getResponse(this.search)
    });

    this.resultsSub = this.movieSvc.onResults.subscribe(
      x => this.results = x as Result[])

    // this.resultsSub = this.movieSvc.getResponse(this.search).subscribe(data => this.results = data as Result[])
  }

  postComment(display_title: any): void {
      
      this.router.navigate(['/comment'], {queryParams: display_title});
  }

}
