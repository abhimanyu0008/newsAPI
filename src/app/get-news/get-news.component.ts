import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from './../news-service.service';

@Component({
  selector: 'app-get-news',
  templateUrl: './get-news.component.html',
  styleUrls: ['./get-news.component.css']
})
export class GetNewsComponent implements OnInit{
 info:any;
 constructor(private service:NewsServiceService){}
  
ngOnInit():void {
    this.service.getNews().subscribe((data)=>{
      console.log(data)
      this.info=data.articles
    })
}

//   ngOnInit():void{
//   this.newService.getTopHeadlines().subscribe((response:any)=>{
//     console.log("response",response)
//     this.article=response;
//   });
//  }
}
