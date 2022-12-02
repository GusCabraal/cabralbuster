import React, { useState } from 'react';
import httpRequest from '../axios/config';
import { useNavigate } from 'react-router-dom';

const MIN_PASSWORD_LENGTH = 6;
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const { data: { token } } = await httpRequest.post('/login', { email, password });
      localStorage.setItem('token', token);
      navigate('/movies');
    } catch (error) {
      setError((error as Error).message);
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