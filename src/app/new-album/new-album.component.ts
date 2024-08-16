import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-new-album',
  templateUrl: './new-album.component.html',
  styleUrls: ['./new-album.component.css']
})
export class NewAlbumComponent implements OnInit{

  constructor(private service:NewsServiceService){}
  
  album:any
  ngOnInit(){
    this.service.albumNews().subscribe((data)=>{
      console.log(data);
      this.album=data;
      
    })
  }
}
