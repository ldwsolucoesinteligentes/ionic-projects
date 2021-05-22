import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { Interaction } from "../post-card/interaction";

@Component({
  selector: "ldw-interactions",
  templateUrl: "./interactions.component.html",
  styleUrls: ["./interactions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InteractionsComponent implements OnInit {
  @Input()
  public get interactions(): Interaction[] {
    return this._interactions.reduce((p: Interaction[], c: Interaction) => {
      if (!p.find((x) => x.type.name === c.type.name)) {
        p.push(c);
      }
      return p;
    }, [] as Interaction[]);
  }
  public set interactions(v: Interaction[]) {
    this._interactions = v;
    this.interactionCount = (v || []).length;
  }
  // tslint:disable-next-line
  private _interactions: Interaction[];

  @Input() commentsCount: number;
  interactionCount: number;

  constructor() {}

  ngOnInit() {}
}
