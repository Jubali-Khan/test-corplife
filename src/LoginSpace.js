export function LoginSpace() {
  return (
    <>
      <div>
        <h3>
          <b>Bitte loggen Sie sich ein um fortzufahren.</b>
        </h3>
        <br />
        <label for="E-Mail-Adresse">
          Bitte fügen Sie Ihre E-Mail-Adresse ein.
        </label>
        <br />
        <input id="E-Mail-Adresse" placeholder="E-Mail-Adresse" />
        <br />
        <label for="Passwort">Passwort</label>
        <br />
        <input id="Passwort" placeholder="Ihr Passwort" />
        <br />
      </div>
    </>
  );
}
