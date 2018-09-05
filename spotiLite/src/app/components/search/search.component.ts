import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  artists: any[] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) {

  }

  ngOnInit() {
  }
  buscar(valor: string){
    this.loading = true;
    console.log(valor);
    this.spotify.getArtistas(valor).subscribe((data: any) =>{
      this.artists = data;
      this.loading = false;
    });
  }
}
