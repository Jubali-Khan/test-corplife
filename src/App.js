import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
/** @jsxImportSource @emotion/react */
import { LoginSpace } from './LoginSpace';
import logoCorplife from './logoCorplife.png';

function App() {
  return (
    <>
      <div>
        <ToastContainer />
      </div>
      <div className="App">
        <header>
          <img src={logoCorplife} alt="Corplife logo" />
          <br />
          <br />
          <br />
          <h2>Willkommen auf der Corplife Plattform!</h2>
          <p>
            Wir haben die professionellsten HR-Tools der Welt an einem Ort für
            Sie zusammengeführt.
          </p>
          <p> login email for validation = 'eve.holt@reqres.in' </p>
          <p>login password for validation = 'cityslicka'</p>
        </header>
        <LoginSpace toast={toast} />
      </div>
    </>
  );
}

export default App;
