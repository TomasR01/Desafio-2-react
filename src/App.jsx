import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // este puede que lo borre porque es bootstrap
import Registro from "./components/Registro";


function App() {

  const [error, setError] = useState("")

  return (
    <>
<Registro/>
    </>
  );
}

export default App