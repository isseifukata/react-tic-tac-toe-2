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
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  font-size: 1.25rem;
  line-height: 1.75rem;
  border-width: ${({ isTurn }) => (isTurn ? "0 0 3px" : "0")};
  &.firstPlayer {
    color: rgb(4, 120, 87);
    border-style: solid;
    border-color: rgb(4, 120, 87);
  }
  &.secondPlayer {
    color: rgb(124, 58, 237);
    border-style: solid;
    border-color: rgb(124, 58, 237);
  }
`;

const Player = (props) => {
  return (
    <Container>
      <PlayerItem className="firstPlayer" isTurn={props.isFirstTurn}>
        O
      </PlayerItem>
      <PlayerItem className="secondPlayer" isTurn={!props.isFirstTurn}>
        X
      </PlayerItem>
    </Container>
  );
};

export default Player;
