import React from "react";
import styled from "styled-components";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.5rem;
  margin-bottom: 2.5rem;
`;

const Cell = styled.button`
  background-color: rgb(229, 231, 235);
  border: 0 solid #e5e7eb;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  font-size: 1.5rem;
  line-height: 2rem;
  width: 5rem;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: background-color, border-color, color, fill, stroke,
    opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
  &[disabled] {
    cursor: not-allowed;
    color: rgb(255, 255, 255);
    ${({ marker }) => cellBgColor(marker)};
  }
`;

const cellBgColor = (marker) => {
  if (marker === "O") {
    return `
    background-color: rgb(4, 120, 87);
    `;
  } else if (marker === "X") {
    return `
    background-color: rgb(124, 58, 237);
    `;
  } else {
    return `
    background-color: rgb(107, 114, 128);
    `;
  }
};

const Board = (props) => {
  return (
    <BoardContainer>
      {props.tableArray.map((element, index) => {
        return (
          <Cell
            onClick={() =>
              props.onClick(
                props.tableArray,
                props.isFirstTurn,
                index,
                props.victoryPlayer
              )
            }
            disabled={props.tableArray[index] && props.victoryPlayer}
            marker={props.tableArray[index]}
            key={index}
          >
            {props.tableArray[index]}
          </Cell>
        );
      })}
    </BoardContainer>
  );
};

export default Board;
