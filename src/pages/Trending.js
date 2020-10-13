import { IonHeader, IonPage, IonTitle } from '@ionic/react';
import React from 'react';
import LargeHeader from '../components/Header/LargeHeader';
import SmallHeader from '../components/Header/SmallHeader';

const Trending = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTitle>
                Trending
                </IonTitle>
            </IonHeader>
        </IonPage>
    )
}

export default Trending;