import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class PostService {
  private url='https://jsonplaceholder.typicode.com/posts/';
  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url);
    }

    creatPost(pos){
     return  this.http.post(this.url,JSON.stringify(pos));
    }

    updatPost(jobj,p){
     return this.http.patch(this.url +'/'+p ,JSON.stringify(jobj) );
    }
    deletPost(p:number){
     return this.http.delete(this.url + '/'+p);
    }
}
