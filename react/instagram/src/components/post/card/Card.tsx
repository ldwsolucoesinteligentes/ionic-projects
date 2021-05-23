import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonIcon,
  IonImg,
  IonSkeletonText,
} from "@ionic/react";
import {
  bookmarkOutline,
  chatbubbleOutline,
  heart,
  heartOutline,
  paperPlaneOutline,
} from "ionicons/icons";
import { PropsWithChildren, useState } from "react";
import { Post } from "../../../models/Post";
import Like from "../../like/Like";
import CardHeader from "../card-header/CardHeader";
import Comments from "../comment/Comment";
import Contents from "../content/Content";
import moment from "moment";
import "./Card.css";

export interface Cards {
  post: Post;
}

export interface CardProps extends PropsWithChildren<Cards> {}

export default function Card(props: CardProps) {
  const { post } = props;
  const { user, content, dateTime, likes } = post;
  const [imageLoad, setImageLoad] = useState(false);
  const likedByUser = !!(likes || []).find((l) => l.user.name === user.name);
  return (
    <IonCard className="post-card">
      <IonCardHeader>
        <CardHeader
          location="Rio de Janeiro, Brasil"
          imageUrl={user.imageUrl}
          title={user.name}
        />
      </IonCardHeader>
      <IonCardContent>
        {!imageLoad && (
          <IonSkeletonText
            animated
            className="post-card__image"
          ></IonSkeletonText>
        )}
        <IonImg
          onIonImgDidLoad={() => setImageLoad(true)}
          className="post-card__image"
          src={content.imageUrl}
        />
        <div className="post-card__iterations">
          <div className="post-card__iterations-left">
            <IonIcon
              size="large"
              color={likedByUser ? "danger" : ""}
              icon={likedByUser ? heart : heartOutline}
            />
            <IonIcon size="large" icon={chatbubbleOutline} />
            <IonIcon size="large" icon={paperPlaneOutline} />
          </div>
          <div className="post-card__iterations-right">
            <IonIcon size="large" icon={bookmarkOutline} />
          </div>
        </div>
        <div className="post-card__likes">
          <Like likes={likes || []} />
        </div>
        <Contents content={content} userName={user.name} />
        <Comments previewMode={true} comments={content.comments || []} />
        <div className="post-card__date">{moment(dateTime).fromNow()}</div>
      </IonCardContent>
    </IonCard>
  );
}
