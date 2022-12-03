import { useState } from 'react';
import httpRequest from '../axios/config';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import axios, { AxiosError } from 'axios';

const MIN_PASSWORD_LENGTH = 6;
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    mutation.mutate()
  };
  
  const mutation = useMutation({
    mutationFn: (() => {
      return httpRequest.post('/login', { email, password })
      .then((response) => response.data)
    }),
    onSuccess: (data) => {
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/movies')
      },
      onError: (err: Error | AxiosError) => {
        if (axios.isAxiosError(err))  {
          setLoginError(true)
        }     
      }
    })
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
          <button
            type="submit"
            disabled={ !(email.match(/\S+@\S+\.\S+/) && password.length > MIN_PASSWORD_LENGTH) }
          >
            Enter
          </button>
        </form>
        {loginError && <p>Usuario não encontrado</p>}
      </main>
    </div>
  );
}

export default Login;