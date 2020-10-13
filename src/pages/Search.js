import { IonContent, IonPage, IonTitle } from "@ionic/react";
import React from "react";
import LargeHeader from "../components/Header/LargeHeader";
import SmallHeader from "../components/Header/SmallHeader";

const Search = () => {
  return (
    <IonPage>
      <SmallHeader title="Search" />
      <IonContent fullscreen>
        <LargeHeader title="Search" />
      </IonContent>
      <IonTitle>Search</IonTitle>
    </IonPage>
  );
};

export default Search;
