import React, { useEffect, useState } from 'react';
import api from '../api/api';
import { useAuth } from '../contexts/AuthContext';
import { Card, Button, Danger, StyledLink, Title } from '../components/UI';

export default function Home() {
  const { user } = useAuth();
  const [chamados, setChamados] = useState([]);

  useEffect(() => { load(); }, []);

  async function load() {
    const url = user?.perfil === 'tecnico' ? '/chamados' : '/chamados/me';
    const res = await api.get(url);
    setChamados(res.data);
  }

  async function remove(id) {
    if (!confirm('Excluir chamado?')) return;
    await api.delete(`/chamados/${id}`);
    setChamados(chamados.filter(c => c.id !== id));
  }

  async function toggleStatus(id, status) {
    await api.patch(`/chamados/${id}/status`, { status });
    load();
  }

  return (
    <div>
      <Title>Meus Chamados</Title>

      {chamados.length === 0 ? (
        <p style={{ marginTop: 16, color: '#6b7280' }}>
          Não há chamados no momento.
        </p>
      ) : (
        chamados.map(c => (
          <Card key={c.id}>
            <h3 style={{ marginBottom: 8, color: "#2563eb" }}>{c.titulo}</h3>
            <p style={{ marginBottom: 8 }}>{c.descricao}</p>

            {c.usuario && (
              <p style={{ marginBottom: 8 }}>
                Criado por: <b>{c.usuario.nome}</b>
              </p>
            )}

            <p style={{ marginBottom: 16 }}>
              Status: <b>{c.status}</b>
            </p>

            <StyledLink to={'/edit/' + c.id}>
              <Button style={{ marginLeft: 8 }}>Editar</Button>
            </StyledLink>
            <Danger style={{ marginLeft: 8 }} onClick={() => remove(c.id)}>
              Excluir
            </Danger>
          </Card>
        ))
      )}
    </div>
  );
}
