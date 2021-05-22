import { Component, OnInit } from "@angular/core";
import { Post } from "../components/post-card/post";
import { PostService } from "../services/post/post.service";
import { Observable } from "rxjs";
import { Story } from "../components/stories/story.ts";
import { StoriesService } from "../services/stories/stories.service";
import { AuthService } from "../services/auth/auth.service";
import { User } from "../profile/profile";

@Component({
  selector: "ldw-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage implements OnInit {
  posts$: Observable<Post[]>;
  stories$: Observable<Story[]>;
  user$: Observable<User>;

  constructor(
    private postService: PostService,
    private storiesService: StoriesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts(1);
    this.stories$ = this.storiesService.getStories("", 1);
    this.user$ = this.authService.getUser(
      "7153dc08-d2d3-4c44-81bf-28cfa9079ff9"
    );
  }
}
