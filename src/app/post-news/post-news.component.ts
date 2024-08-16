import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent {

  constructor(private service:NewsServiceService){}
  post:any
  ngOnInit(){
    this.service.postNews().subscribe((data)=>{
      console.log(data)
      this.post=data;
    })
  }
}
