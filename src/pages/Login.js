import {
  IonButton,
  IonCol,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonRow,
  IonTitle,
} from "@ionic/react";
import React from "react";
import NavHeader from "../components/Header/NavHeader";

const Login = () => {
  return (
    <IonPage>
      <NavHeader title="Log In" />
      <IonContent fullscreen>
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
              Log In
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonRouterLink routerLink={"/forgot"}>
              Forgot Password?
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonContent>
      <IonTitle>Hunt</IonTitle>
    </IonPage>
  );
};

export default Login;
