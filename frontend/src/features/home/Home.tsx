import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = () => {
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
                  <a href="#" className="btn btn-secondary rounded-pill text-white fw-medium">¡Empieza ya!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer>  </Footer>
      </IonContent>  
    </IonPage>
  );
};

export default Home;
