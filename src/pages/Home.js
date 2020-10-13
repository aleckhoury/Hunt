import { IonContent, IonHeader, IonPage, IonTitle } from "@ionic/react";
import React from "react";
import LargeHeader from "../components/Header/LargeHeader";
import SmallHeader from "../components/Header/SmallHeader";

const Home = () => {
  return (
    <IonPage>
      <SmallHeader title="Hunt" />
      <IonContent fullscreen>
        <LargeHeader title="Hunt" />
      </IonContent>
      <IonTitle>Hunt</IonTitle>
    </IonPage>
  );
};

export default Home;
