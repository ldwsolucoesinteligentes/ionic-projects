import { IonLabel, IonAvatar, IonImg } from "@ionic/react";
import React from "react";
import "./Avatar.css";

export interface AvatarProps {
  userImageUrl: string;
  hideBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { userImageUrl, hideBorder } = props;
  return (
    <IonLabel className="ldw-avatar">
      <IonAvatar>
        <IonImg
          className={`${!hideBorder ? "ldw-avatar__border-active" : ""}`}
          src={userImageUrl}
        />
      </IonAvatar>
      {props.children}
    </IonLabel>
  );
};

export default Avatar;
