import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { Comments, Result } from '../models';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-post-comment-component',
  templateUrl: './post-comment-component.component.html',
  styleUrls: ['./post-comment-component.component.css']
})
export class PostCommentComponentComponent implements OnInit {

  commentForm!: FormGroup;
  title!: Title;

  constructor(private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
      this.commentForm = this.fb.group({
      name: this.fb.control<string>("", [ Validators.required, Validators.minLength(3) ]),
      rating: this.fb.control<number>(3, [ Validators.required, Validators.min(1), Validators.max(5) ]),
      comment: this.fb.control<string>("", [ Validators.required ])
  })

  this.activatedRoute.queryParams.subscribe(x => 
    {this.title = x as Title
    });
  }

  postComment(): void {
    const comments = this.commentForm.value as Comments;
      console.log(comments);
  }

}
