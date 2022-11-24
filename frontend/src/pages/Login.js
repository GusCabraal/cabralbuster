import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const MIN_PASSWORD_LENGTH = 6;
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();
  
  const handleClick = (event) => {
    event.preventDefault();
    history.push('movies');
  };
  return (
    <div>
      <main>
        <form onSubmit={ handleClick }>
          <input
            type="email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            placeholder="Digite seu email"
          />
          <input
            type="password"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
            placeholder="Digite sua senha"
          />
          <button
            type="submit"
            disabled={ !(email.match(/\S+@\S+\.\S+/) && password.length > MIN_PASSWORD_LENGTH) }
          >
            Enter
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;