import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import Player from "./components/Player";
import Board from "./components/Board";
import Status from "./components/Status";

const victoryList = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 16rem;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h1`
  color: rgb(20, 20, 20);
  text-align: center;
  margin-bottom: 1.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
`;

const App = () => {
  const [isFirstTurn, setIsFirstTurn] = useState(true);
  const [tableArray, setTableArray] = useState(new Array(9).fill(null));
  const [victoryPlayer, setVictoryPlayer] = useState(null);

  // リセット
  const reset = () => {
    setIsFirstTurn(true);
    setTableArray(new Array(9).fill(null));
  };

  // 次のターンに移る
  const changeTurn = () => {
    setIsFirstTurn((prevIsFirstTurn) => !prevIsFirstTurn);
  };

  // 配列にマーカーを追加
  const addMarker = (tableArray, isFirstTurn, index) => {
    const tmpArray = tableArray.slice();
    tmpArray[index] = isFirstTurn ? "O" : "X";
    setTableArray(tmpArray);
  };

  // 勝敗チェック
  const victoryOrDefeatCheck = (tableArray) => {
    let victoryPlayer = null;
    victoryList.forEach((victoryListItem) => {
      const marker1 = tableArray[victoryListItem[0]];
      const marker2 = tableArray[victoryListItem[1]];
      const marker3 = tableArray[victoryListItem[2]];
      if (marker1 === marker2 && marker2 === marker3 && marker1 !== null) {
        victoryPlayer = marker1;
      }
    });
    setVictoryPlayer(victoryPlayer);
  };

  // 引き分け判定
  const checkDraw = (tableArray) => {
    let isDraw = false;
    isDraw = !tableArray.some((value) => value === null);
    if (isDraw) {
      setVictoryPlayer("draw");
    }
  };

  const onClick = (tableArray, isFirstTurn, index) => {
    addMarker(tableArray, isFirstTurn, index);
    changeTurn(isFirstTurn);
  };

  useEffect(() => {
    victoryOrDefeatCheck(tableArray);
    checkDraw(tableArray);
  }, [tableArray]);

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Inner>
          <Title>TIC TAC TOE</Title>
          <Player isFirstTurn={isFirstTurn} />
          <Board
            victoryPlayer={victoryPlayer}
            isFirstTurn={isFirstTurn}
            tableArray={tableArray}
            onClick={onClick}
          />
          <Status victoryPlayer={victoryPlayer} onClick={reset} />
        </Inner>
      </Wrapper>
    </>
  );
};

export default App;
