import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { Post } from "./post";

@Component({
  selector: "ldw-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCardComponent implements OnInit {
  @Input() liked: boolean;
  @Input() post: Post;

  constructor() {}

  ngOnInit() {}
}
