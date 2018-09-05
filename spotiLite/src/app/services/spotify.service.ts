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
      'Authorization': 'Bearer BQBEBfDkL-LZkvLtsQBd4tK6eWjPPRNkAbCwSLL-oGoUt6-LsKYw-3j0Xr5XINcjDKGydub10Iwja897cDY'
    });

    return this.http.get(url, {headers});
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases').pipe(map(data => {
      return data['albums'].items;
    }));
  }

  getArtista(valorBusqueda: string){
    return this.getQuery(`search?query=${valorBusqueda}&type=artist&market=ES&offset=0&limit=15`).pipe(map(data =>{
      return data['artists'].items;
    }));

  }
}
