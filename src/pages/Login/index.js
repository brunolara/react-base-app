import React from 'react';
import { useDispatch } from 'react-redux';
import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    console.log('clique');
    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
    <Container>
      <Title isRed>
        Ola
        <small>Prqueno</small>
      </Title>
      <Paragrafo>Prqueno</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
      <div />
    </Container>
  );
}
