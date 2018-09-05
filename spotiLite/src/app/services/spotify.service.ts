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
      'Authorization': 'Bearer BQDgR4NUSsNv-n3FoHXkDrAMGB8-29zx6qzbQYhCAkEQHoYrHBAdBzYSDPZ-gib_zC5yad8ogas2i8zPbZw"'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
