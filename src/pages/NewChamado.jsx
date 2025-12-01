import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';
import { Card, Input, Textarea, Button } from '../components/UI';

export default function NewChamado() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post('/chamados', { titulo, descricao });
    navigate('/home'); // Redireciona para /home após criar
  }

  return (
    <Card>
      <h2>Novo Chamado</h2>
      <form onSubmit={handleSubmit}>
        <Input placeholder='Título' value={titulo} onChange={e=>setTitulo(e.target.value)} />
        <Textarea placeholder='Descrição' value={descricao} onChange={e=>setDescricao(e.target.value)} />
        <Button type='submit'>Criar</Button>
      </form>
    </Card>
  );
}
