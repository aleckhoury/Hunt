import {
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React from "react";
import NavHeader from "../components/Header/NavHeader";

const Signup = () => {
  return (
    <IonPage>
      <NavHeader title="Sign Up" />
      <IonContent fullscreen>
        <IonItem times="full">
          <IonLabel position="floating">Username</IonLabel>
          <IonInput name="name" type="text" required></IonInput>
        </IonItem>

        <IonItem times="full">
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" type="text" required></IonInput>
        </IonItem>

        <IonItem times="full">
          <IonLabel position="floating">Password</IonLabel>
          <IonInput name="password" type="password" required></IonInput>
        </IonItem>

        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Sign Up
            </IonButton>
          </IonCol>
        </IonRow>
      </IonContent>
      <IonTitle>Hunt</IonTitle>
    </IonPage>
  );
};

export default Signup;
