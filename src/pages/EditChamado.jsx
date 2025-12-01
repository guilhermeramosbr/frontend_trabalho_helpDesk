import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';
import { Card, Input, Textarea, Button, Select } from '../components/UI';

export default function EditChamado() {
  const { id } = useParams();
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('aberto');
  const navigate = useNavigate();

  useEffect(()=>{ load(); },[id]);
  async function load(){
    const res = await api.get('/chamados/'+id);
    setTitulo(res.data.titulo);
    setDescricao(res.data.descricao);
    setStatus(res.data.status || 'aberto');
  }

  async function handleSubmit(e){
    e.preventDefault();
    await api.put('/chamados/'+id,{titulo,descricao,status});
    navigate('/home'); // Redireciona para /home após salvar
  }

  return (
    <Card>
      <h2>Editar Chamado</h2>
      <form onSubmit={handleSubmit}>
        <Input value={titulo} onChange={e=>setTitulo(e.target.value)} placeholder="Título" />
        <Textarea value={descricao} onChange={e=>setDescricao(e.target.value)} placeholder="Descrição" />
        <Select value={status} onChange={e=>setStatus(e.target.value)}>
          <option value="aberto">Aberto</option>
          <option value="concluido">Concluído</option>
          <option value="fechado">Fechado</option>
        </Select>
        <Button type='submit'>Salvar</Button>
      </form>
    </Card>
  );
}
