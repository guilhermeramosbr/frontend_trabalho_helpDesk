import React from 'react';
import { Outlet } from 'react-router-dom';
import { Page, Button, StyledLink } from './UI';
import { useAuth } from '../contexts/AuthContext';

export default function Layout() {
  const { user, logout } = useAuth();

  return (
    <Page>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'flex-end', // Alinha para a direita
          alignItems: 'center',
          padding: '24px 32px 24px 0', // padding-right para colar à direita
          marginBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          {user ? (
            <>
              <span>{user.nome} ({user.perfil})</span>
              <StyledLink to='/home'>Home</StyledLink>
              <StyledLink to='/new'>Adicionar</StyledLink>
              <Button onClick={logout}>Sair</Button>
            </>
          ) : (
            <>
              <StyledLink to='/login'>Entrar</StyledLink>
              <StyledLink to='/register'>Registrar</StyledLink>
            </>
          )}
        </div>
      </nav>
      <Outlet />
    </Page>
  );
}
