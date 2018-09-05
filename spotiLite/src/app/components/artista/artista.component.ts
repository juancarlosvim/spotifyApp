import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(params =>{
      console.log(params['id']);
    });
  }

  ngOnInit() {
  }

}
