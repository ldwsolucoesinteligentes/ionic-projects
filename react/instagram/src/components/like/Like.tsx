import { IonAvatar, IonImg, IonNote } from "@ionic/react";
import React, { PropsWithChildren } from "react";
import { LikeModel } from "../../models/Like";
import "./Like.css";

export interface Like {
  likes: LikeModel[];
}

export interface LikeProps extends PropsWithChildren<Like> {}

export default function Likes(props: LikeProps) {
  const { likes } = props;
  const lastLike = likes[0];
  return (
    <div className="post-card__like">
      <IonAvatar>
        <IonImg src={lastLike.user.imageUrl} />
      </IonAvatar>
      <IonNote>
        Liked by <b>{lastLike.user.name}</b>
        {likes.length > 1 && (
          <span>
            and
            <b>
              {likes.length} other{likes.length > 1 ? "s" : ""}
            </b>
          </span>
        )}
      </IonNote>
    </div>
  );
}
