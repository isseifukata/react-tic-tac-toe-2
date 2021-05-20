import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 1.25rem;
`;

const PlayerItem = styled.div`
  width: 50%;
  color: rgb(4, 120, 87);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  border-bottom: ${({isTurn}) => (isTurn ? '3px solid rgb(4, 120, 87)' : '0')};
`;

const Player = props => {
  return (
    <Container>
      <PlayerItem isTurn={props.currentTurn === "first"}>○</PlayerItem>
      <PlayerItem isTurn={props.currentTurn === "second"}>✗</PlayerItem>
    </Container>
  );
};

export default Player;
