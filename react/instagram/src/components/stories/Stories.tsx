import {
  IonLabel,
  IonAvatar,
  IonImg,
  IonNote,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { addCircle } from "ionicons/icons";
import React from "react";
import "./Stories.css";
import Avatar from "../avatar/Avatar";

export interface Story {
  userImageUrl: string;
  userName: string;
}

export interface StoriesProps {
  stories: Story[];
}

const Stories: React.FC<StoriesProps> = (props) => {
  const renderAvatar = (story: Story, isUserLogged = false) => {
    return (
      <Avatar userImageUrl={story.userImageUrl} key={story.userName}>
        {isUserLogged && (
          <IonIcon color="primary" className="add-story" icon={addCircle} />
        )}
        <IonNote>{isUserLogged ? "Your Story" : story.userName}</IonNote>
      </Avatar>
    );
  };
  const stories = props.stories.map((s) => ({
    ...s,
    userName: `${s.userName.substr(0, 8)}...`,
  }));
  return (
    <div className="stories">
      {renderAvatar(stories[0], true)}
      {stories.slice(1).map((s, i) => renderAvatar(s))}
    </div>
  );
};

export default Stories;
