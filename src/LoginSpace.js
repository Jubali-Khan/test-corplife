/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const formStyles = css`
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 2%;
  text-align: left;
  min-width: 40%;

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -85%);

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

  button {
    height: 30px;
    margin: 5px;
  }

  .passwordForgotten {
    background-color: transparent;
    border: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

export function LoginSpace() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  console.log(email);
  return (
    <>
      <form css={formStyles}>
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
        />

        <label htmlFor="Passwort">Passwort</label>
        <input
          id="Passwort"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          placeholder="Ihr Passwort"
        />

        <button>Anmelden</button>
        <button className="passwordForgotten">Passwort vergessen</button>
      </form>
    </>
  );
}
