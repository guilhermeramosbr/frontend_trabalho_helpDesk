import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { useAuth } from '../contexts/AuthContext';
import { Card, Input, Button } from '../components/UI';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const { setUser } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await api.post('/auth/login', { email, senha });
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user); // <-- Changed here
      console.log('Login user:', res.data.usuario);
      navigate('/home');
    } catch (err) {
      alert('Erro ao entrar: ' + (err.response?.data?.message || err.message));
    }
  }

  return (
    <Card>
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit}>
        <Input placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
        <Input type='password' placeholder='Senha' value={senha} onChange={e=>setSenha(e.target.value)} />
        <Button type='submit'>Entrar</Button>
      </form>
      <Button onClick={() => navigate('/register')} style={{ marginTop: 10 }}>
        Registrar
      </Button>
    </Card>
  );
}
