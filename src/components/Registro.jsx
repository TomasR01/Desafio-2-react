import { useState } from "react";
import Formulario from "./Formulario";
import Alert from "./Alert";
import SocialButton from "./SocialButton";



function Registro() {
  const [alert, setAlert] = useState({
    error: "",
    message: "",
    color: "",
  });

  return (
  <>
  <main>
    <h1>Crea una cuenta</h1>
    <div className="iconos">
      <SocialButton github={'github'} facebook={'facebook'} linkedin={'linkedin'}/>
  </div>

  <p>O usa tu email para registrarte</p>

  <Formulario setAlert={setAlert}/>
  { alert.message && <Alert error={alert.error} color={alert.color}>{alert.message}</Alert> }
  </main>
  </>
  );
}

export default Registro;