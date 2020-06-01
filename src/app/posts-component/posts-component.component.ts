import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent implements OnInit {
posts:any[];
  constructor(private service : PostService) { 
    
  } 
  createPost(input: HTMLInputElement){
    let post = {title: input.value};
    input.value='';
   this.service.createPost(post)
    .subscribe(response => {
      this.posts.splice(0,0,post)
      console.log(response);
    })
  }
  updatePost(post){
   this.service.updatePost(post)
    .subscribe(response => {
      console.log(post);
    })
  }
  deletePost(post){
    this.service.deletePost(post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    })
  }
  ngOnInit(){
   this.service.getPosts()
    .subscribe(response =>{
      console.log(response);
      this.posts = response;
    });
  }
}
