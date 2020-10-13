import { IonContent, IonPage, IonTitle } from "@ionic/react";
import React from "react";
import LargeHeader from "../components/Header/LargeHeader";
import SmallHeader from "../components/Header/SmallHeader";

const Profile = () => {
  return (
    <IonPage>
      <SmallHeader title="Profile" />
      <IonContent fullscreen>
        <LargeHeader title="Profile" />
      </IonContent>
      <IonTitle>Profile</IonTitle>
    </IonPage>
  );
};

export default Profile;
