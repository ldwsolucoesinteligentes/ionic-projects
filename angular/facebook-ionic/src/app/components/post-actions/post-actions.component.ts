import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "ldw-post-actions",
  templateUrl: "./post-actions.component.html",
  styleUrls: ["./post-actions.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostActionsComponent implements OnInit {
  @Input() liked: boolean;

  constructor() {}

  ngOnInit() {}
}
