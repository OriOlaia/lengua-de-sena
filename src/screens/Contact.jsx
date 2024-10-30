import {useState} from 'react'
import "./Contact.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor.
      console.log('Formulario enviado:', { name, email, message });
      // Resetear los campos del formulario
      setName('');
      setEmail('');
      setMessage('');
  };
    return (
      <div className='contact'>
        <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                
                    <label htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                
                <button type="submit">Enviar</button>
            </form>
      </div>
    )
  }
  
  export default Contact
  