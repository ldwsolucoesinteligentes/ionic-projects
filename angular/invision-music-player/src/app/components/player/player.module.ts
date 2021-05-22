import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [PlayerComponent],
  exports: [PlayerComponent],
  imports: [CommonModule, FormsModule, IonicModule]
})
export class PlayerModule {}
