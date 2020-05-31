import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts-component',
  templateUrl: './posts-component.component.html',
  styleUrls: ['./posts-component.component.css']
})
export class PostsComponentComponent {
posts:any[];
private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http : HttpClient) { 
    this.http.get<any>(this.url)
    .subscribe(response =>{
      console.log(response);
      this.posts = response;
    });
  } 
  addTitle(input: HTMLInputElement){
    let post = {title: input.value};
    input.value='';

    this.http.post(this.url,post)
    .subscribe(response => {
      this.posts.splice(0,0,post)
      console.log(response);
    })
  }
}
