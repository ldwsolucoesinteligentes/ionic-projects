import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoriesComponent } from "./stories/stories.component";
import { IonicModule } from "@ionic/angular";
import { PostCardComponent } from "./post-card/post-card.component";
import { InteractionsComponent } from "./interactions/interactions.component";
import { CommentsComponent } from "./comments/comments.component";
import { PostActionsComponent } from "./post-actions/post-actions.component";

const COMPONENTS = [
  StoriesComponent,
  PostCardComponent,
  InteractionsComponent,
  CommentsComponent,
  PostActionsComponent,
];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
