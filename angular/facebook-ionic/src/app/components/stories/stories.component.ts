import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";
import { Story } from "./story.ts";
import { User } from "src/app/profile/profile";

@Component({
  selector: "ldw-stories",
  templateUrl: "./stories.component.html",
  styleUrls: ["./stories.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoriesComponent implements OnInit {
  @Input()
  public get stories(): Story[] {
    return this._stories;
  }
  public set stories(v: Story[]) {
    this._stories = v;
    if (!v) {
      this.appendUserStories();
      return;
    }
    this.formatStories();
    this.appendUserStories();
  }
  // tslint:disable-next-line
  private _stories: Story[];

  @Input() userLogged: User;
  constructor() {}

  ngOnInit() {}

  private formatStories() {
    this._stories = this._stories.map((u) => ({
      ...u,
      author: {
        ...u.author,
        userName: u.author.userName
          .split(" ")
          .filter((n) => n.length >= 3)
          .splice(0, 2)
          .join("<br />"),
      },
    }));
  }

  private appendUserStories() {
    if (!this._stories) {
      this._stories = [];
    }
    this._stories.unshift({
      id: "",
      author: {
        id: "",
        userName: "Add to <br>Story",
        userImageURL:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/768px-Feather-core-plus-circle.svg.png",
      },
      stories: [
        {
          imageURL:
            "https://media-exp1.licdn.com/dms/image/C4D03AQEWswPGb3GBDA/profile-displayphoto-shrink_100_100/0?e=1603929600&v=beta&t=Y_Q0B6kki_Csg7n_Qgwu7xaZai_iFexjeluKsXBt37s",
        },
      ],
    } as Story);
  }
}
