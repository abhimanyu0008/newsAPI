import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetNewsComponent } from './get-news/get-news.component';
import { PostNewsComponent } from './post-news/post-news.component';
import { NewAlbumComponent } from './new-album/new-album.component';

const routes: Routes = [
  {
    path:'getNews', component:GetNewsComponent
   },
   {
    path:'postNews', component:PostNewsComponent
   },
   {
    path:'albumNews', component:NewAlbumComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
