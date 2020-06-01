import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http : HttpClient) { }
  getPosts(){
    return this.http.get<any>(this.url);
  }
  createPost(post){
   return this.http.post(this.url,post);
  }
  updatePost(post){
   return this.http.patch(this.url+'/'+post.id,{isRead: true});
  }
  deletePost(id){
    return this.http.delete(this.url+'/'+id);
  }
}
