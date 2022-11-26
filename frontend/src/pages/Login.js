import React, { useState } from 'react';
import httpRequest from '../axios/config';
import { useHistory } from 'react-router-dom';

const MIN_PASSWORD_LENGTH = 6;
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data: { token } } = await httpRequest.post('/login', { email, password });
      console.log(token);
      localStorage.setItem('token', token);
      history.push('/movies');
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <main>
        <form onSubmit={ handleSubmit }>
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
          {error && <p>{error}</p>}
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