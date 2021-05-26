import React, { useState } from "react";
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
  position: relative;
  overflow: hidden;
  &:after {
    z-index: -1;
    content: "";
    display: block;
    position: absolute;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(4, 120, 87, 0.3) 50%,
      rgba(124, 58, 237, 0.3) 50%
    );
    transition: 0.2s ease-out;
    top: 0;
    left: ${({ isFirstTurn }) => (isFirstTurn ? "0" : "-100%")};
  }
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
    setVictoryPlayer(null);
  };

  // 次のターンに移る
  const changeTurn = () => {
    setIsFirstTurn((prevIsFirstTurn) => !prevIsFirstTurn);
  };

  // 配列にマーカーを追加
  const addMarker = (tableArray, isFirstTurn, index) => {
    const newArray = tableArray.slice();
    newArray[index] = isFirstTurn ? "O" : "X";
    return newArray;
  };

  // 勝敗チェック
  const victoryOrDefeatCheck = (tableArray) => {
    let victoryPlayer = null;
    victoryList.forEach((victoryListItem) => {
      const [marker1, marker2, marker3] = [
        tableArray[victoryListItem[0]],
        tableArray[victoryListItem[1]],
        tableArray[victoryListItem[2]],
      ];

      if (marker1 === marker2 && marker2 === marker3 && marker1 !== null) {
        victoryPlayer = marker1;
        setVictoryPlayer(victoryPlayer);
      }
    });
  };

  // 引き分け判定
  const checkDraw = (tableArray, victoryPlayer) => {
    if (victoryPlayer !== null) {
      return;
    }
    const allCellMarked = !tableArray.some((value) => value === null);
    if (victoryPlayer === null && allCellMarked) {
      setVictoryPlayer("draw");
    }
  };

  const onClick = (tableArray, isFirstTurn, index, victoryPlayer) => {
    const newTableArray = addMarker(tableArray, isFirstTurn, index);
    setTableArray(newTableArray);
    changeTurn(isFirstTurn);
    victoryOrDefeatCheck(newTableArray);
    checkDraw(newTableArray, victoryPlayer);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper isFirstTurn={isFirstTurn}>
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
