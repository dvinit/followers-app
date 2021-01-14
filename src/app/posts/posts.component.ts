import { PostService } from './../services/post.service';



import { Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent implements OnInit {
posts:any ;
tmp:any;

  constructor(private service : PostService) { 

   
  }
createPost(input:HTMLInputElement){
  let pos={title:input.value};
  input.value='';
  this.service.creatPost(pos).
  subscribe(
  response =>{
   this.tmp=response;
   pos['id']=this.tmp.id;
   this.posts.splice(0,0,pos);
  }, 
  (error:Response)=>{
    if(error.status===400){
    //  this.form.setErrors(error.json());
    }
    else {
    alert('An unexpected create error has occured');
  console.log(error);
  }
  });
}  
updatePost(post){
let jobj={isRead:true};
let p=post.id;
this.service.updatPost(jobj,p).
subscribe(
response =>{
console.log(response);
},
error => {
  alert('An unexpected update error has occured ');
console.log(error);
});

}
  
deletePost(post){
  let p=post.id;
this.service.deletPost(0).
subscribe(
response =>{
console.log(response);
let index =this.posts.indexOf(post);
this.posts.splice(index,1);
},
(error:Response)=>{
  if(error.status===404)
  alert('This post does not exist');
  else 
alert('An unexpected delete error has occured');
console.log(error);
});


}

ngOnInit(){
  this.service.getPosts()
  .subscribe(
    response  => {
      this.posts=response;
    },
    error=>{ 
       alert('An unexpected error has occured');
       console.log(error);
     });

}




}
