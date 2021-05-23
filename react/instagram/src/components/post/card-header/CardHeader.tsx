import { IonIcon, IonLabel, IonNote } from "@ionic/react";
import React, { PropsWithChildren } from "react";
import Avatar from "../../avatar/Avatar";
import { ellipsisHorizontal } from "ionicons/icons";
import "./CardHeader.css";

export interface CardHeaderModel {
  imageUrl: string;
  title: string;
  location?: string;
}

export interface CardHeaderProps extends PropsWithChildren<CardHeaderModel> {}

export default function CardHeader(props: CardHeaderProps) {
  const { imageUrl, title, location } = props;
  return (
    <div className="post-card-header">
      <Avatar userImageUrl={imageUrl} />
      <div className="post-card-header__info">
        <IonLabel>{title}</IonLabel>
        <IonNote>{location}</IonNote>
      </div>
      <div className="post-card-header__view-more">
        <IonIcon icon={ellipsisHorizontal} />
      </div>
    </div>
  );
}
