import './App.css';
/** @jsxImportSource @emotion/react */
import { LoginSpace } from './LoginSpace';
import logoCorplife from './logoCorplife.png';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logoCorplife} alt="Corplife logo" />
        <br />
        <br />
        <br />
        <h2>Willkommen auf der Corplife Plattform!</h2>
        <p>
          Wir haben die professionellsten HR-Tools der Welt an einem Ort für Sie
          zusammengeführt.
        </p>
      </header>
      <LoginSpace />
    </div>
  );
}

export default App;
