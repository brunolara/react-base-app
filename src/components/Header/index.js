import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav } from './styled';

export default function Header() {
  const btClicado = useSelector((state) => state.example.botaoClicado);
  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaSignInAlt />
      </Link>
      <Link to="/teste">
        <FaUserAlt />
      </Link>
      {btClicado ? 'Clicado' : 'Nao clicado'}
    </Nav>
  );
}
