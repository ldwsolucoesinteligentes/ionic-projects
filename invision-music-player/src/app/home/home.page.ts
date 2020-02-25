import { Component } from '@angular/core';
import { IMusic } from '../components/models/music';

@Component({
  selector: 'app-home',
  template: `
    <ion-content [fullscreen]="true">
      <ldw-player [musicList]="musics"></ldw-player>
    </ion-content>
  `,
  styles: []
})
export class HomePage {
  public musics: IMusic[];
  constructor() {
    this.musics = [
      {
        src: '/assets/mp3/Titãs - Epitáfio(MTV Ao vivo).mp3',
        title: 'Epitáfio',
        artist: 'Titãs'
      },
      {
        src: '/assets/mp3/BTS - Boy With Luv.mp3',
        title: 'Boy With Luv',
        artist: 'BTS'
      }
    ];
  }
}
