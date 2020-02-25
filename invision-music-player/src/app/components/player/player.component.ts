import { Component, OnInit, ViewChild } from '@angular/core';
import { IonImg } from '@ionic/angular';

@Component({
  selector: 'ldw-player',
  template: `
    <ion-grid slot="fixed">
      <ion-row class="details">
        <ion-col
          *ngIf="playing"
          class="details__description animated once fadeInUp"
          size="10"
          offset="1"
        >
          <div>
            <ion-label class="ion-text-bold" color="dark">Epitáfio</ion-label>
          </div>
          <div>
            <ion-note>Titãs</ion-note>
          </div>
          <div class="details__description--bar">
            <ion-progress-bar
              [value]="progressValue"
              color="medium"
            ></ion-progress-bar>
          </div>
        </ion-col>
      </ion-row>
      <ion-row class="player">
        <ion-col size="4">
          <ion-img
            #disc
            [ngClass]="{ 'player__disc--play': playing }"
            class="player__disc"
            src="/assets/disc-image.png"
          ></ion-img>
        </ion-col>
        <ion-col>
          <ion-button class="player__controls" color="medium" fill="clear">
            <ion-icon
              slot="icon-only"
              class="player__controls--icon"
              color="player-controls"
              name="play-back"
            ></ion-icon>
          </ion-button>
        </ion-col>
        <ion-col>
          <ion-button
            class="player__controls"
            (click)="playing = !playing"
            [ngClass]="{ 'player__controls--active': playing }"
            color="medium"
            fill="clear"
          >
            <ion-icon
              [size]="playing ? 'extra-large' : 'large'"
              class="player__controls--icon"
              slot="icon-only"
              [color]="playing ? 'light' : 'medium'"
              [name]="playing ? 'pause' : 'play'"
            ></ion-icon>
          </ion-button>
        </ion-col>
        <ion-col>
          <ion-button class="player__controls" color="medium" fill="clear">
            <ion-icon
              color="player-controls"
              class="player__controls--icon"
              slot="icon-only"
              name="play-forward"
            ></ion-icon>
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  `,
  styles: [
    `
      .details {
        min-height: 65px;
      }
      .details__description {
        text-align: left;
        margin-bottom: 0px;
        border-radius: 5px;
        border-top: 1px solid rgb(227, 227, 227);
        border-left: 1px solid rgb(227, 227, 227);
        border-right: 1px solid rgb(227, 227, 227);
      }
      .details__description:first-child {
        font-weight: 500;
      }
      .details__description--bar {
        margin-top: 5px;
      }
      .details__description div {
        width: 70%;
        margin-left: 30%;
      }
      .player {
        border-radius: 5px;
        height: 90px;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
      }
      .player__disc {
        margin-top: -40%;
        width: 100%;
      }

      .player__disc--play {
        -webkit-animation: spin 3s linear infinite;
        -moz-animation: spin 3s linear infinite;
        animation: spin 3s linear infinite;
      }

      .player__controls {
        height: 90%;
        width: 100%;
        border-radius: 10px;
        --border-radius: 10px;
      }

      .player__controls--active {
        background-color: #e9e9e9;
        --background: #e9e9e9;
      }

      .player__controls--icon {
        --padding-end: 1em;
      }

      .icon-extra-large {
        font-size: 42px !important;
      }

      @-moz-keyframes spin {
        100% {
          -moz-transform: rotate(360deg);
        }
      }
      @-webkit-keyframes spin {
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes spin {
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
    `
  ]
})
export class PlayerComponent implements OnInit {
  @ViewChild(IonImg, { static: true }) public disc: any;
  private musicTime = 3.5 * 60;
  private currentTime = 0;
  private _playing: boolean;
  public get playing(): boolean {
    return this._playing;
  }
  public set playing(v: boolean) {
    this._playing = v;
    this.loadProgress(v);
  }
  private intervalKey: any;
  private _progressValue = 0;
  public get progressValue(): number {
    return this._progressValue;
  }
  public set progressValue(v: number) {
    if (v > 1) {
      this.playing = false;
      this._progressValue = 0;
      clearInterval(this.intervalKey);
      return;
    }
    this._progressValue = v;
  }

  constructor() {}

  ngOnInit() {}

  private loadProgress(play: boolean) {
    if (!play) {
      clearInterval(this.intervalKey);
      return;
    }
    const timeInterval = 1 / this.musicTime;
    this.intervalKey = setInterval(() => {
      this.progressValue = this.progressValue + timeInterval;
      this.currentTime++;
    }, 1000);
  }
}
