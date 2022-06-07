import React from 'react'
import styled from 'styled-components'
function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
      </Wrap>
    </Container>
  );
}

export default Viewers
const Container = styled.div`
    margin-top:30px;
    display: grid;
    padding: 30px 0 25px;
    grid-gap:25px;
    grid-template-columns: repeat(5,minmax(0,1fr));
   
`
const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 19px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 19px rgba(0, 0, 0, 0);
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.96) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
    -webkit-box-shadow: 0px 10px 13px -7px #000000,
      5px 5px 15px 25px rgba(0, 0, 0, 0);
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 25px rgba(0, 0, 0, 0);
  }
`;