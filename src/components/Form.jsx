import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{ backgroundColor: "#0505059f", transition: "background 0.3s ease" }}
    >
      <div className="d-flex justify-content-between w-100" style={{ maxWidth: "1200px" }}>
        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="p-4 rounded shadow"
          style={{
            width: "100%",
            maxWidth: "460px",
            backgroundColor: "#ffffff",
            border: "2px solid #ff6633",
            transition: "all 0.3s ease",
          }}
        >
          <h2
            className="text-center mb-4"
            style={{ color: "#ff6633", fontWeight: "700" }}
          >
            Contáctanos
          </h2>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#ff6633" }}>
              Nombre
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                borderColor: "#ff6633",
                transition: "border-color 0.3s",
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#ff6633" }}>
              Correo
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Tu correo"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                borderColor: "#ff6633",
                transition: "border-color 0.3s",
              }}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" style={{ color: "#ff6633" }}>
              Mensaje
            </label>
            <textarea
              name="message"
              rows="4"
              className="form-control"
              placeholder="Tu mensaje"
              value={formData.message}
              onChange={handleChange}
              required
              style={{
                borderColor: "#ff6633",
                resize: "none",
                transition: "border-color 0.3s",
              }}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn w-100 mt-3"
            style={{
              backgroundColor: "#ff6633",
              color: "#fff",
              fontWeight: "bold",
              transition: "background-color 0.3s ease",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#e65528")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff6633")}
          >
            Enviar
          </button>
        </form>

        {/* Imagen al lado derecho */}
        <div className="d-none d-md-block" style={{ width: "50%" }}>
          <img
            src="https://th.bing.com/th/id/R.b1cb3ad4d6dad2d04bc3f7c8a37ef662?rik=nn0z5fx6Uvfpog&pid=ImgRaw&r=0" // Imagen de Paella Valenciana
            alt="Imagen de Paella Valenciana"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
