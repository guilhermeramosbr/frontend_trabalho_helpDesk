import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: Inter, sans-serif;
  background: #f3f4f6;
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  padding: 32px 28px;
  margin: 5% auto;
  max-width: 420px;
  width: 90%;
  overflow: hidden;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.03);

  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 480px) {
    padding: 24px 20px;
    border-radius: 16px;
  }
`;


export const Button = styled.button`
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background: linear-gradient(90deg, #2563eb 60%, #1e40af 100%);
  color: white;
  font-weight: 700;
  font-size: 1rem;
  margin-top: 10px;
  transition: background 0.2s;
  &:hover {
    background: linear-gradient(90deg, #1e40af 60%, #2563eb 100%);
    opacity: 0.95;
  }
`;

export const Danger = styled(Button)`
  background: #ef4444;
  &:hover {
    background: #dc2626;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  width: 100%;
  margin-bottom: 16px;
  font-size: 1rem;
  background: #f9fafb;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #2563eb;
    outline: none;
    background: #fff;
  }
`;

export const Select = styled.select`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  width: 100%;
  margin-bottom: 16px;
  font-size: 1rem;
  background: #f9fafb;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #2563eb;
    outline: none;
    background: #fff;
  }
`;

export const Textarea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  width: 100%;
  min-height: 100px;
  font-size: 1rem;
  background: #f9fafb;
  margin-bottom: 16px;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #2563eb;
    outline: none;
    background: #fff;
  }
`;

export const StyledLink = styled(Link)`
  color: inherit !important;
  text-decoration: none !important;
  &:hover {
    color: #2563eb !important;
    text-decoration: underline !important;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: #1e40af;
  margin-bottom: 32px;
  text-align: center;
  letter-spacing: 1px;
`;
