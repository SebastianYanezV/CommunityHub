import { IonContent, IonHeader, IonPage, IonToolbar, IonFooter, IonButton, IonModal } from '@ionic/react';
import Navbar from './navbarHome/NavbarHome';
import './Home.css';
import Footer from './footerHome/FooterHome';
import React, { useState } from 'react';
import LoginForm from '../authentication/loginForm/LoginForm';

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderModal = () => (
    <IonModal isOpen={showModal} onDidDismiss={closeModal}>
      <IonContent className="login-container">
        <div className="close-button" onClick={closeModal} style={{ textAlign: 'right', padding: '5px' }}>
          <IonButton color="danger" onClick={closeModal}>x</IonButton>
        </div>
        <LoginForm />
      </IonContent>
    </IonModal>
  );

  return (
    <IonPage>
      <IonHeader>
        <Navbar />
      </IonHeader>
      <IonContent>
        <div className="d-flex container-fluid shadow ps-5 pe-5 justify-content-xl-center" id="condominio-home">
          <div className="row">
            <div className="col-md-6">
              <div className="card rounded-4 text-center opacity-100 p-3" id="card-home">
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    Software para la administración de edificios y condominios
                  </h5>
                  <p className="card-text lh-sm mt-4 mb-4">
                    Administra edificios con CommunityHub, el software y la aplicación
                    para tu comunidad. Gastos comunes en línea y mucho más.
                  </p>
                  <button className="btn btn-secondary rounded-pill text-white fw-medium" onClick={openModal}>¡Empieza ya!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </IonContent>
      {renderModal()}
    </IonPage>
  );
};

export default Home;
