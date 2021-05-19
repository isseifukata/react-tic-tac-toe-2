import React from 'react'
import styled from 'styled-components'

const turn = () => {
  const Players = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 1.25rem;
  `;

  const Player = styled.div`
    width: 50%;
    color: rgb(4,120,87);
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
  `;
  return (
    <Players>
      <Player>○</Player>
      <Player>✗</Player>
    </Players>
  )
}

export default turn
