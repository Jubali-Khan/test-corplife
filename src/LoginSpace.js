/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const formStyles = css`
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  margin: 5% 27% 10% 27%;
  padding: 4%;
  text-align: left;
  min-width: 40%;

  background-color: white;
  display: flex;
  flex-direction: column;

  label {
    margin: 3px;
    font-size: small;
  }

  input {
    margin: 6px;
    border: 1px solid lightgray;
    border-radius: 5px;
    height: 30px;
    padding: 3px;
    margin-bottom: 20px;
  }

  input:hover {
    border: 1px solid black;
  }

  .loginButton {
    height: 40px;
    margin: 5px;
    background-image: linear-gradient(
      to right,
      #ff512f 0%,
      #dd2476 51%,
      #ff512f 100%
    );
    border-radius: 10px;
    border: none;
    color: white;
  }

  .passwordForgotten {
    height: 30px;
    margin: 5px;
    background-color: transparent;
    border: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

export function LoginSpace() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // https://reqres.in/ was used for successful login
  const loginSampleEmail = 'eve.holt@reqres.in';
  const loginSamplePassword = 'cityslicka';

  async function loginHandler() {
    const response = await fetch('https://reqres.in/api/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        email: loginSampleEmail,
        password: loginSamplePassword,
      }),
    });
    const loginDetails = await response.json();
    console.log('loginDetails: ', loginDetails);

    // resolved response object (loginDetails) contains a 'token' key
    if (loginDetails.token) {
      localStorage.setItem('token', JSON.stringify(loginDetails.token));
    }
  }

  return (
    <>
      <form css={formStyles} onSubmit={(e) => e.preventDefault()}>
        <p style={{ textAlign: 'center' }}>
          <strong>Bitte loggen Sie sich ein um fortzufahren.</strong>
        </p>
        <label htmlFor="E-Mail-Adresse">
          Bitte fügen Sie Ihre E-Mail-Adresse ein.
        </label>
        <input
          id="E-Mail-Adresse"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          placeholder="E-Mail-Adresse"
          type="email"
        />

        <label htmlFor="Passwort">Passwort</label>
        <input
          id="Passwort"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Ihr Passwort"
          type="password"
        />

        <button onClick={loginHandler} className="loginButton">
          Anmelden
        </button>
        <button className="passwordForgotten">Passwort vergessen</button>
      </form>
    </>
  );
}
