import styled, { keyframes } from 'styled-components'
import { useState } from 'react';
import { useEffect } from 'react';

const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

const TextCursor = styled.span`
  border-right: 2px solid white;
  display: inline;
  background-color: white;
  /* A mágica acontece aqui */
  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;



`;

const Container = styled.p`
  display: inline-block;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  ::selection{
    background-color: #EBE9EA;
    color: #181818;

}
`

function TypeWriter({ value }) {
    const [text, setText] = useState('');
  
    const typeWriter = (text, i = 0) => {
      if (i < value.length) {
        setText(text.slice(0, i + 1));
        setTimeout(() => {
          typeWriter(text, i + 1);
        }, 100);
      }
    };
  
    useEffect(() => {
      typeWriter(value);
    }, []);
  
    return (
      <Container>
        {text}
        <TextCursor />
      </Container>
    );
  }

  export default TypeWriter