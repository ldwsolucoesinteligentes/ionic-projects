import { Component, OnInit } from "@angular/core";

@Component({
  selector: "ldw-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
})
export class PostCardComponent implements OnInit {
  liked: boolean;
  constructor() {}

  ngOnInit() {}
}
