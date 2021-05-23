import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonLoading,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext, useEffect } from "react";
import { store } from "../store";
import PostService from "../services/PostService";
import "./Home.css";
import { AddPosts } from "../store/actions";
import { AsyncCallError } from "../store/actions/async-calls";

const Home: React.FC = () => {
  const { state, dispatch } = useContext(store);
  useEffect(() => {
    const service = new PostService(dispatch);
    service
      .getPosts()
      .then((posts) => dispatch(new AddPosts(posts)))
      .catch((err) => dispatch(new AsyncCallError(err.message)));
  }, [dispatch]);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Instagram</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading
          message="loading posts..."
          isOpen={state.isLoading}
        ></IonLoading>
        {!state.isLoading && (
          <IonList>
            <IonListHeader>Posts</IonListHeader>
            {state.posts.map((p, i) => (
              <IonItem key={i}>
                <IonCard>
                  <IonCardContent>
                    <div>{p.content.text}</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IonAvatar slot="start">
                        <IonImg src={p.user.profileImageUrl} />
                      </IonAvatar>
                      <IonLabel style={{ marginLeft: "1rem" }}>
                        {p.user.name}
                      </IonLabel>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
