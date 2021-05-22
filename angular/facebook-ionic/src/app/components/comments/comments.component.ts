import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { PostComment } from "../post-card/post-comment";

@Component({
  selector: "ldw-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentsComponent implements OnInit {
  @Input() comments: PostComment[];

  constructor() {}

  ngOnInit() {}
}
