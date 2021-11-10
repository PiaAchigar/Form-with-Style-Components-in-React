import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    nombre: "",
    apellido: "",
    email: "",
    pais: "",
    description: "",
    files: "",
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const sendData = (e) => {
    console.log(user);
    e.preventDefault();
  };

  const rolShow = () => {
    if (user.rol === "emprendedor") return "show";
    else return "hide";
  };

  return (
    <>
      <form onSubmit={sendData}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={user.nombre}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={user.apellido}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Mail"
          value={user.email}
          onChange={handleChange}
        />

        <select name="pais" onChange={handleChange}>
          <option value="mexico" placeholder="Selecciona un país" default>
            Selecciona un país
          </option>
          <option value="mexico"> México</option>
          <option value="colombia">Colombia</option>
          <option value="peru">Perú</option>
          <option value="argentina">Argentina</option>
        </select>

        <select name="rol" onChange={handleChange}>
          <option value="ciudadano"> Ciudadano</option>
          <option value="emprendedor">Emprendedor</option>
        </select>

        <div className={rolShow()}>
          <p>Sube tu logo aquí</p>
          <input
            type="file"
            name="files"
            onChange={handleChange}
            value={user.logo}
          />
          <button>Subir Imagen</button>
        </div>

        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          value={user.description}
          onChange={handleChange}
        ></textarea>

        <input type="submit" name="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Form;
