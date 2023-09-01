import { Component, OnInit } from '@angular/core';
import { HttpContentService } from './http-content.service';
import { IPost } from './interfaces/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: IPost[] = [];

  constructor(
    private httpService: HttpContentService
  ) { }

  ngOnInit(
  ) { }

  onCreatePost(postData: IPost) {
    this.httpService.postPost(postData).subscribe((result) => {
      console.log(result)
    })
  }

  onFetchPosts() {
    this.httpService.getPosts().subscribe((posts: IPost[]) => {
      this.loadedPosts = posts
    })
  }

  onClearPosts() {
    this.httpService.deletePosts().subscribe((result)=>{
      this.loadedPosts= []
      console.log(result)
    })
  }
}
