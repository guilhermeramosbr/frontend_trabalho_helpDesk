import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { Card, Input, Button, StyledLink } from '../components/UI';

export default function Register() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [perfil, setPerfil] = useState('usuario');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post('/auth/register', { nome, email, senha, perfil });
      alert('Registrado com sucesso!');
      navigate('/login');
    } catch {
      alert('Erro ao registrar');
    }
  }

  return (
    <Card >
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>
        <Input placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
        <Input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <Input type='password' placeholder='Senha' value={senha} onChange={e => setSenha(e.target.value)} />
        <select value={perfil} onChange={e => setPerfil(e.target.value)} style={{ marginBottom: 16 }}>
          <option value='usuario'>Usuário</option>
          <option value='tecnico'>Técnico</option>
        </select>
        <Button type='submit'>Registrar</Button>
      </form>

     
      <p style={{ marginTop: 12, textAlign: 'center' }}>
        Já possui conta?{' '}
        <StyledLink to="/login">Entrar</StyledLink>
      </p>
    </Card>
  );
}
