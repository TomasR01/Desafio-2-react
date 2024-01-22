import { useState } from "react";

function Formulario({ setAlert }) {
  const [formData, SetFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validarFormulario = (e) => {
    e.preventDefault();
    const { nombre, email, password, confirmPassword } = formData;
    const validarInputs = !nombre || !email || !password || !confirmPassword;
    const validarClave = password !== confirmPassword;

    validarInputs
      ? setAlert({
          error: true,
          message: "Por favor, completa todos los campos",
          color: "warning",
        })
      : setAlert({
          error: false,
          message: "Cuenta creada exitosamente",
          color: "success",
        });

    if (validarClave) {
      setAlert({
        error: true,
        message: "Las contraseñas no coinciden",
        color: "danger",
      });
      return;
    }

    SetFormData({
      nombre: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleChange = (e) => {
    SetFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form className="formulario" onSubmit={(e) => validarFormulario(e)}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={handleChange}
            value={formData.nombre}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="correoelectrónico@dominio.com"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={handleChange}
            value={formData.password}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            placeholder="Confirma tu constraseña"
            onChange={handleChange}
            value={formData.confirmPassword}
          />
        </div>

        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
}

export default Formulario;
