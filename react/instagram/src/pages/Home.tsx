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
import Header from "../components/header/Header";
import { AddPosts } from "../store/actions";
import { AsyncCallError } from "../store/actions/async-calls";
import Stories from "../components/stories/Stories";
import Card from "../components/post/card/Card";

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
      <Header></Header>
      <IonContent fullscreen>
        <IonLoading
          message="loading posts..."
          isOpen={state.isLoading}
        ></IonLoading>

        {!state.isLoading && (
          <IonToolbar>
            <Stories stories={state.stories}></Stories>
          </IonToolbar>
        )}
        {!state.isLoading &&
          state.posts.map((p, i) => <Card key={i} post={p} />)}
      </IonContent>
    </IonPage>
  );
};

export default Home;
