import React from 'react'
import styled from 'styled-components';
function Detail() {
  return (
    <Container>
      <Background>
        <img
          src="https://www.denofgeek.com/wp-content/uploads/2019/04/avengers-endgame-ending-explained.jpg?fit=1280%2C720"
          alt=""
        />
      </Background>
      <ImageTitle>
        <img src="/images/back.png" alt="" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerButton>
        <Add>
          <span>+</span>
        </Add>
        <GroupWatch>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatch>
      </Controls>
      <SubTitle>Lorem ipsum dolor sit amet consectetur adipisicing.</SubTitle>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam odit
        ullam illo suscipit, quos dicta illum porro ad labore ut.
      </Description>
    </Container>
  );
}

export default Detail
const Container = styled.div`
    height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position :relative;
`
const Background = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:-1;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        opacity: 0.2;
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height:170px;
    width: 30vw;
    min-width:200px;
    
    img{
      width:100%;
      height:100%;
      object-fit: contain;
    }
`

const Controls = styled.div`
    display:flex;
    align-items:center;
    
`
const PlayButton = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 0 22px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  height: 56px;
  border: none;
  font-size: 15px;
  &:hover {
    background: rgb(198, 198, 199);
  }
`;
const TrailerButton = styled(PlayButton)`
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid white;
`;
const Add = styled.button`
  cursor: pointer;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  span {
    color: white;
    font-size: 30px;
  }
`
const GroupWatch = styled(Add)`
  background: black;
`
const SubTitle = styled.div`
  font-size:14px;
  margin-top:20px;
`
const Description = styled.div`
  font-size: 20px;
  margin-top: 10px;
`;