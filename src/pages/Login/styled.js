import styled from 'styled-components';

export const Title = styled.h1`
  small {
    font-size: 12pt;
    margin-left: 15px;
    color: white;
  }
  background: ${(props) => (props.isRed ? 'red' : 'blue')};
`;

export const Paragrafo = styled.p``;
