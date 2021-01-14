import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
year:any;
month:any;
  constructor(private route: ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
 this.route.paramMap.
 subscribe(params=>{
   this.year=params.get('year');
   this.month=params.get('month');
 });
 

    
  }

  submit(){
   this.router.navigate(['/'],{queryParams:{ page:1 ,order:'newest'}});

  }

}
