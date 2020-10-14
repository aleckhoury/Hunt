import { IonContent, IonPage, IonTitle } from "@ionic/react";
import React from "react";
import LargeHeader from "../components/Header/LargeHeader";
import SmallHeader from "../components/Header/SmallHeader";

const Trending = () => {
  return (
    <IonPage>
      <SmallHeader title="Trending" />
      <IonContent fullscreen>
        <LargeHeader title="Trending" />
      </IonContent>
      <IonTitle>Trending</IonTitle>
    </IonPage>
  );
};

export default Trending;
