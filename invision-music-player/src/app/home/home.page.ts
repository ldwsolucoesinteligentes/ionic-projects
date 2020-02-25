import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <ion-content [fullscreen]="true">
          <ldw-player></ldw-player>
      </ion-content>
  `,
  styles: [],
})
export class HomePage {

  constructor() {}

}
