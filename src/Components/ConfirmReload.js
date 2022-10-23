import React from "react";
import styled from "styled-components";
import CloseButton from "./CloseButton";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  background: rgba(220,220,220,.85);
  padding: 40px 20px;
  overflow: auto;
`;

const Dialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 400px;
  background: #fafafa;
  border-radius: 10px;
  padding: 20px;
  font-size: 16px;
  line-height: 1.6;
  color: #222;

  .confirm__buttons {
    margin-top: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }
`;

const CancelButton = styled.button`
  display: block;
  width: 30%;
  max-width: 120px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  color: ${props => props.theme.color.red};
  background: transparent;
  border: 2px solid ${props => props.theme.color.red};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
`;

const AcceptButton = styled.button`
  display: block;
  width: 30%;
  max-width: 120px;
  height: 48px;
  font-size: 16px;
  font-weight: 700;
  color: #fafafa;
  background: ${props => props.theme.color.red};
  border: none;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  margin-left: 40px;
`


function ConfirmReload( {closeConfirm, onClick} ) {
  return(
    <Overlay>
      <CloseButton action={closeConfirm}>x</CloseButton>
      <Dialog>
        <p>Reload full setlist?</p>
        <div className="confirm__buttons">
          <CancelButton onClick={closeConfirm}>Cancel</CancelButton>
          <AcceptButton onClick={() => {
            onClick();
            closeConfirm();
          }}>
            Reload
          </AcceptButton>
        </div>
      </Dialog>
    </Overlay>
  )
}

export default ConfirmReload;