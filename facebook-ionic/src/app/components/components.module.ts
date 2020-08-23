import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoriesComponent } from "./stories/stories.component";
import { IonicModule } from "@ionic/angular";
import { PostCardComponent } from "./post-card/post-card.component";

const COMPONENTS = [StoriesComponent, PostCardComponent];

@NgModule({
  declarations: COMPONENTS,
  exports: COMPONENTS,
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
