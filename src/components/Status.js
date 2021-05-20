import React from "react";
import styled from "styled-components";

const Status = () => {
  const StatusContainer = styled.div``;
  const Message = styled.p`
    text-align: center;
    margin-bottom: 0.75rem;
  `;
  const ButtonContainer = styled.div`
    text-align: center;
  `;

  const RestartButton = styled.button`
    color: rgb(255, 255, 255);
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    margin-left: auto;
    margin-right: auto;
    border-radius: 0.25rem;
    background-color: rgb(5, 150, 105);
    cursor: pointer;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.15s;
    border: 0 solid #e5e7eb;
    &:hover {
      background-color: rgb(6, 95, 70);
    }
  `;

  return (
    <StatusContainer>
      <Message>starting...</Message>
      <ButtonContainer>
        <RestartButton>RESTART</RestartButton>
      </ButtonContainer>
    </StatusContainer>
  );
};

export default Status;
