import React from 'react'
import styled from 'styled-components'
function Login() {
  return (
    <Container>
      <Background>
        <img src="/images/login-background.jpg" />
      </Background>
      <Content>
        <Logo>
          <img src="/images/cta-logo-one.svg" alt="" />
        </Logo>
        <Signup>Sign Up!</Signup>
        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          harum aliquid laborum animi quam dolorem!
        </Description>
        <Logo1>
          <img src="/images/cta-logo-two.png" alt="" />
        </Logo1>
      </Content>
    </Container>
  );
}

export default Login
const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
  display: flex;
  align-items: top;
  justify-content: center;
`;
const Background = styled.div`
    position: fixed;
    top:0;
    right:0;
    left:0;
    bottom:0;
    z-index:-1;
    img{
        width:100%;
        height:100%;
    }
    opacity: 0.5;
`;
const Content = styled.div`
  max-width: 650px;
  width: 70%;
  display: flex;
  flex-direction:column;
  margin-top:100px;
`;
const Logo = styled.div`
`;
const Logo1 = styled.div`
margin-top: 25px;
    img{
        width:100%;
    }
`;
const Signup = styled.button`
  background: #0063e5;
  color: white;
  width:100%;
  font-size: 18px;
  font-weight: bold;
  padding: 17px 0;
  transition: all 250ms;
  margin-top: 12px;
  margin-bottom: 10px;
  &:hover{
      background: #0483ee;
  }
`;
const Description = styled.div`
  font-size:12px;
  text-align:center;
`