import { IonIcon, IonNote } from "@ionic/react";
import { heart, heartOutline } from "ionicons/icons";
import React, { PropsWithChildren } from "react";
import { CommentModel } from "../../../models/Comment";
import { orderBy } from "lodash";
import "./Comments.css";

export interface Comment {
  comments: CommentModel[];
  previewMode?: boolean;
}

export interface CommentProps extends PropsWithChildren<Comment> {}

export default function Comments(props: CommentProps) {
  const { comments, previewMode } = props;
  let commentsRender = previewMode
    ? orderBy(comments, ["dateTime", "desc"]).slice(0, 2)
    : comments;
  commentsRender = previewMode
    ? commentsRender.map((c) => ({
        ...c,
        comment: `${c.comment.substr(0, 30)}...`,
      }))
    : commentsRender;
  return (
    <div className="post-card__comments">
      {previewMode && <button>View all {comments.length} comments</button>}
      {commentsRender.map((c, i) => (
        <div key={i} className="post-card__comments-preview">
          <IonNote>
            <b>{c.user.name}</b>&nbsp;{c.comment}
          </IonNote>
          <IonIcon
            color={c.like ? "danger" : ""}
            icon={c.like ? heart : heartOutline}
          />
        </div>
      ))}
    </div>
  );
}
