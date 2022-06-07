import React from 'react'
import styled from 'styled-components'
function Movies() {
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/7460/627460-h" />
        </Wrap>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/7460/627460-h" />
        </Wrap>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/7460/627460-h" />
        </Wrap>
        <Wrap>
          <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/7460/627460-h" />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies

const Container = styled.div`
`
const Content = styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns:repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 19px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 19px rgba(0, 0, 0, 0);
    transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.96) 0s;
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover{
      border:3px solid rgba(249,249,249,0.8);
      transform: scale(1.05);
  }
`;