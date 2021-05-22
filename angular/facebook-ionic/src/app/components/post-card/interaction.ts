import { InteractionType } from "./interaction-type";

export interface Interaction {
  userId: string;
  type: InteractionType;
}
