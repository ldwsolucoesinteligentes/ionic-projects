import { IonNote } from "@ionic/react";
import React, { PropsWithChildren, useState } from "react";
import { ContentModel } from "../../../models/Content";
import "./Content.css";

export interface Content {
  content: ContentModel;
  userName: string;
}

export interface ContentProps extends PropsWithChildren<Content> {}

export default function Contents(props: ContentProps) {
  const { content, userName } = props;
  const [showContent, setShowContent] = useState(false);
  const contentIsLong = content.description && content.description.length > 100;

  return (
    <div className="post-card__content">
      <IonNote>
        <b>{userName}</b>
        {!showContent && contentIsLong && content.description?.substr(0, 60)}
        {showContent && content.description}
        {!showContent && contentIsLong && (
          <span className="post-card__content-mode">
            ...&nbsp;
            <button onClick={() => setShowContent(true)}>more</button>
          </span>
        )}
      </IonNote>
    </div>
  );
}
