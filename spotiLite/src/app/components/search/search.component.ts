import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
  }
  buscar(valor: string){
    console.log(valor);
    this.spotify.getArtista(valor).subscribe((data: any) =>{
      this.artists = data;
    });
  }
}
