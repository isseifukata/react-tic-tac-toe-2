import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Player from './components/Player';
import Board from './components/Board';
import Status from './components/Status';

const App = () => {
  const Wrapper = styled.main`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Inner = styled.div`
    width:16rem;
    margin-left: auto;
    margin-right: auto;
  `;

  const Title = styled.h1`
    color: rgb(6,95,70);
    text-align: center;
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
  `;

  return (
    <>
    <GlobalStyle />
      <Wrapper>
        <Inner>
          <Title>TIC TAC TOE</Title>
          <Player />
          <Board />
          <Status />
        </Inner>
      </Wrapper>
    </>
  );
}

export default App;
