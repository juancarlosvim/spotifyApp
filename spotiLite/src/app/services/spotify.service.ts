import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo!!');
  }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDDozXe_9eUKV9x7Sp4YWqBZB3z4RB6W5NQOo9EDn02mcgzOhq1EbljfYDo1XdpxBqGlgJC8cHqeOQPYU4'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).subscribe(data =>{
        console.log(data);
    });
  }
}
