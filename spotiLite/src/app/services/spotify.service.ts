import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo!!');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQABCEZpfdZFje6RtHHlizH0Cl6kSzQl9dJAFcKw8MRgTU5B7z6ETokr2gJXGYs9r7Df-_vSd3ESJhe62t0'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map(data => {
      return data['albums'].items;
    }));
  }

  getArtistas(valorBusqueda: string) {
    return this.getQuery(`search?query=${valorBusqueda}&type=artist&market=ES&offset=0&limit=15`).pipe(map(data => {
      return data['artists'].items;
    }));
  }

  getArtist(idArtista: string) {
    return this.getQuery(`artists/${idArtista}`);//.pipe(map(data => {

    //}));
  }
}
