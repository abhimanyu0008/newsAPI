import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http:HttpClient) { }

  getUrl="https://newsapi.org/v2/everything?q=tesla&from=2024-07-16&sortBy=publishedAt&apiKey=66d0834e99a446b99530b69dda8c33f2"
  
  postUrl="https://jsonplaceholder.typicode.com/posts"

  albumUrl="https://jsonplaceholder.typicode.com/albums"

    // getTopHeadlines():Observable<any>{
    //   return this.http.get(this.getUrl)
    // }
    // getArticle(id:string):Observable<any>{
    //   return this.http.get(this.getUrl)
    // }
    getNews():Observable<any>{
      return this.http.get(this.getUrl)
    }
    postNews():Observable<any>{
      return this.http.get(this.postUrl)
    }
    albumNews():Observable<any>{
      return this.http.get(this.albumUrl)
    }
  }
 

