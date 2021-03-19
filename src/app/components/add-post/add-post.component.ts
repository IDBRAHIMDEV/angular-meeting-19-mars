import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  myPost = {
    title: '',
    body: ''
  }

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  persistPost() {
    this.postService.persist(this.myPost)
        .subscribe(res => this.router.navigate(['/']))
  }

}
