import React, { useState } from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Player from './components/Player';
import Board from './components/Board';
import Status from './components/Status';

const App = () => {
  const [currentTurn, setCurrentTurn] = useState('first');
  const [tableArray, settableArray] = useState(new Array(9).fill(null));
  const victoryList = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];

  const changeTurn = currentTurn => {
    if (currentTurn === 'first') {
      return 'second';
    }
    if (currentTurn === 'second') {
      return 'first';
    }
  }

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
          <Board  />
          <Status />
        </Inner>
      </Wrapper>
    </>
  );
}

export default App;
