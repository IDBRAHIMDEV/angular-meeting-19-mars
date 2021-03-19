import { PostService } from './../../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent implements OnInit {

  posts: any[] = []

  constructor(private postService: PostService) { }

  ngOnInit(): void {

    this.postService.getAll()
        .subscribe((res: any) => this.posts = res)
  }

}
