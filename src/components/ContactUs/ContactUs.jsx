import React from "react";
import { useDispatch } from "react-redux";
import { enviarForm } from "../../redux/actions/actions";

const ContactUs = () => {

  const [form, setForm] = React.useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const dispatch = useDispatch()


  const handleSubmit = () => {
    console.log(form);
    dispatch(enviarForm(form))
    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    })
  }

  const handleInput = (e) => setForm(
    {
    ...form,
      [e.target.name]: e.target.value
    })

    

  return (
    <div>
      <form className="contactBg" onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input name="nombre" value={form.nombre} onChange={handleInput}/>
        <label htmlFor="email">Email: </label>
        <input name="email" value={form.email} onChange={handleInput}/>
        <label htmlFor="asunto">Asunto: </label>
        <input name="asunto" value={form.asunto} onChange={handleInput}/>
        <label htmlFor="mensaje">Mensaje: </label>
        <input name="mensaje" value={form.mensaje} onChange={handleInput}/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ContactUs;
