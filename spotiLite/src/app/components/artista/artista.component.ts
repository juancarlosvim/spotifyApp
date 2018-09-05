import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {
  artista: any = {};
  artistaId: string;
  loading: boolean;
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params => {
      console.log(params['id']);
      this.artistaId = params['id'];
      this.getArtista(this.artistaId);
    });
  }

  getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtist(id).subscribe(artista =>{
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
  }

  ngOnInit() {
  }

}
