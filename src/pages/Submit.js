import { IonContent, IonPage, IonTitle } from "@ionic/react";
import React from "react";
import LargeHeader from "../components/Header/LargeHeader";
import SmallHeader from "../components/Header/SmallHeader";

const Submit = () => {
  return (
    <IonPage>
      <SmallHeader title="Submit" />
      <IonContent fullscreen>
        <LargeHeader title="Submit" />
      </IonContent>
      <IonTitle>Submit</IonTitle>
    </IonPage>
  );
};

export default Submit;
