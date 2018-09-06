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
      'Authorization': 'Bearer QCOe-jyFG6LdFjH4qd2QOcGbuzdKU0kfStjpqFsjTfG6nH3t0MFVOEOlipC6y4HsBX3IdXnNbIX0ihaevU'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases() {
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

  getTopTracks(idArtista: string) {
    return this.getQuery(`artists/${idArtista}/top-tracks?country=ES`).pipe(map(data => {
      return data['tracks'];
    }));
  }
}
