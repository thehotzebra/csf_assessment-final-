import { Component, Input, OnInit, Output, OnDestroy, SimpleChanges} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { Search } from '../models';

@Component({
  selector: 'app-search-review-component',
  templateUrl: './search-review-component.component.html',
  styleUrls: ['./search-review-component.component.css']
})
export class SearchReviewComponentComponent implements OnInit {

  searchForm!: FormGroup;

  constructor (private fb: FormBuilder, private router: Router, private movieSvc: AppService) {}

  ngOnInit(): void {
		this.searchForm = this.fb.group({
	      search: this.fb.control<string>('avengers', [Validators.required, Validators.pattern('\\s*(\\S\\s*){2,}')]),
	    })
}

  processForm(): void {
      const search = this.searchForm.value as Search;
      console.log(search);

      this.router.navigate(['/movie'], {queryParams: search});
  }
}
