import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { IonImg, ToastController } from '@ionic/angular';
import {
  AnimationBuilder,
  group,
  animate,
  style,
  trigger,
  state,
  transition
} from '@angular/animations';
import { IMusic } from '../models/music';

@Component({
  selector: 'ldw-player',
  template: `
    <ion-grid slot="fixed">
      <ion-row class="details">
        <ion-col
          *ngIf="playing"
          [@onPlaying]="playing"
          class="details__description"
          size="10"
          offset="1"
        >
          <div>
            <ion-label class="ion-text-bold ion-text-wrap" color="dark">{{
              actualMusic?.title
            }}</ion-label>
          </div>
          <div>
            <ion-note>{{ actualMusic?.artist }}</ion-note>
          </div>
          <div class="details__description--bar">
            <ion-progress-bar
              [value]="progressValue"
              color="medium"
            ></ion-progress-bar>
          </div>
        </ion-col>
        <audio hidden #player></audio>
      </ion-row>
      <ion-row class="player">
        <ion-col size="4">
          <ion-img
            #disc
            class="player__disc"
            src="/assets/disc-image.png"
          ></ion-img>
        </ion-col>
        <ion-col>
          <ion-button
            class="player__controls"
            (click)="onPrev()"
            color="medium"
            [disabled]="!playing"
            fill="clear"
          >
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
          <ion-button
            class="player__controls"
            (click)="onNext()"
            color="medium"
            [disabled]="!playing"
            fill="clear"
          >
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
        margin-top: -15%;
        margin-left: 5%;
        width: 90px;
      }

      .player__disc--play {
        width: 95px;
        -webkit-animation: spin 2s linear infinite;
        -moz-animation: spin 2s linear infinite;
        animation: spin 2s linear infinite;
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
        font-size: 35px !important;
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
  ],
  animations: [
    trigger('onPlaying', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50%)' }),
        animate(
          '1s ease-in',
          style({ opacity: 1, transform: 'translateY(-5%)' })
        )
      ]),
      transition(':leave', [
        animate(
          '500ms ease-in',
          style({ opacity: 0, transform: 'translateY(50%)' })
        )
      ])
    ])
  ]
})
export class PlayerComponent implements OnInit {
  @ViewChild(IonImg, { static: true }) public discElement: any;
  @ViewChild('player', { static: true }) public playerElement: ElementRef<
    HTMLAudioElement
  >;
  public actualMusic: IMusic;
  @Input() public musicList: IMusic[] = [];
  private $player: HTMLAudioElement;
  private musicTime = 0;
  // tslint:disable-next-line: variable-name
  private _actualPlayingIndex: number;
  public get actualPlayingIndex(): number {
    return this._actualPlayingIndex || 0;
  }
  public set actualPlayingIndex(v: number) {
    this._actualPlayingIndex = v;
    this.actualMusic = this.musicList[this._actualPlayingIndex];
    this.playMusic();
  }

  // tslint:disable-next-line: variable-name
  private _playing: boolean;
  public get playing(): boolean {
    return this._playing;
  }
  public set playing(v: boolean) {
    if (!this.musicList || !this.musicList.length) {
      this.showError();
      return;
    }
    this._playing = v;
    if (!v) {
      this.animateDisc('90px');
      this.toggleAnimate();
      this.$player.pause();
    } else {
      this.playMusic();
      this.animateDisc('95px');
    }
  }
  private intervalKey: any;
  // tslint:disable-next-line: variable-name
  private _progressValue = 0;

  public get progressValue(): number {
    return this._progressValue;
  }
  public set progressValue(v: number) {
    if (v > 1) {
      this.reset();
      this.playing = false;
      this.$player.pause();
      return;
    }
    this._progressValue = v;
  }
  private toggleAnimate = () =>
    this.discElement.el.classList.toggle('player__disc--play');

  constructor(
    private builder: AnimationBuilder,
    private toast: ToastController
  ) {}

  ngOnInit() {
    this.actualMusic = this.musicList[this.actualPlayingIndex];
    this.$player = this.playerElement.nativeElement;
    this.$player.addEventListener('ended', _ => this.loadProgress(false));
  }

  public onPrev() {
    if (this.actualPlayingIndex < 0) {
      return this.showError();
    }
    this.reset();
    this.actualPlayingIndex--;
  }

  public onNext() {
    if (this.actualPlayingIndex === this.musicList.length - 1) {
      return this.showError();
    }
    this.reset();
    this.actualPlayingIndex++;
  }

  private playMusic() {
    this.$player.src = this.actualMusic.src;
    this.$player.play().then(value => {
      console.log('player values ', this.$player.duration);
      this.musicTime = (this.$player.duration / 60) * 60;
      this.loadProgress(true);
    });
  }

  private reset() {
    this._progressValue = 0;
    clearInterval(this.intervalKey);
    this.musicTime = 0;
  }

  private showError() {
    this.toast
      .create({
        message: 'No music in list for reproducer...',
        position: 'bottom',
        color: 'warning',
        duration: 3000
      })
      .then(toast => toast.present());
  }

  private loadProgress(play: boolean) {
    if (!play) {
      clearInterval(this.intervalKey);
      return;
    }
    const timeInterval = 1 / this.musicTime;
    this.intervalKey = setInterval(() => {
      this.progressValue = this.progressValue + timeInterval;
    }, 1000);
  }

  private animateDisc(width: string) {
    console.log(`start animation width: ${width}`);
    const factory = this.builder.build(
      group([
        animate(
          '2s linear',
          style({
            transform: 'rotate(360deg)'
          })
        ),
        animate('500ms linear', style({ width }))
      ])
    );
    const player = factory.create(this.discElement.el);
    player.onDone(() => {
      player.destroy();
      if (!this.playing) {
        return;
      }
      this.toggleAnimate();
    });
    player.play();
  }
}
