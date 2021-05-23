import {
  IonButtons,
  IonButton,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonImg,
} from "@ionic/react";
import React from "react";
import "./Header.css";
import { cameraOutline, paperPlaneOutline } from "ionicons/icons";

const Header: React.FC = () => {
  return (
    <IonHeader className="ldw-header">
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={cameraOutline} />
          </IonButton>
        </IonButtons>
        <IonTitle className="ion-text-center">
          <IonImg src="/assets/icon/logo.png" />
        </IonTitle>
        <IonButtons slot="end">
          <IonButton>
            <IonIcon slot="icon-only" icon={paperPlaneOutline} />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
