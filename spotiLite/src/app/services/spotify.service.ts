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

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAGkVVjrpaCRjD-Yym-GI9xXJHA49tFo7QMRRPdSJa970A7jPtB4iEcLN69oSHbbyiXPCiLRj3nNWTidTE'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).pipe(map(data =>{
        return data['albums'].items;
    }));
  }

  getArtista(valorBusqueda: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAGkVVjrpaCRjD-Yym-GI9xXJHA49tFo7QMRRPdSJa970A7jPtB4iEcLN69oSHbbyiXPCiLRj3nNWTidTE'
    });
    return this.http.get(`https://api.spotify.com/v1/search?query=${valorBusqueda}&type=artist&market=ES&offset=0&limit=15`, {headers}).pipe(map(data =>{
      return data['artists'].items;
    }));
  }
}
