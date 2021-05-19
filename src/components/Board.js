import React from 'react'
import styled from 'styled-components'

const Board = () => {

  const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: .5rem;
    margin-bottom: 2.5rem;
  `;

  const Cell = styled.button`
    background-color: rgb(229,231,235);
    border: 0 solid #e5e7eb;
    border-radius: .25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    font-size: 1.5rem;
    line-height: 2rem;
    width: 5rem;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;
    transition-property: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    &:hover {
      opacity: .6;
      cursor: pointer;
    }
  `;

  return (
    <BoardContainer>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </BoardContainer>
  )
}

export default Board
