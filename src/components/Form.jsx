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
    // Aquí puedes manejar el envío (API, correo, etc.)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-2xl shadow-md w-80"
        style={{ maxHeight: '452px' }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Contáctanos</h2>
        
        <input 
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <input 
          type="email"
          name="email"
          placeholder="Correo"
          value={formData.email}
          onChange={handleChange}
          className="w-full mb-3 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />

        <textarea 
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          rows="3"
          required
        />

        <button 
          type="submit" 
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
