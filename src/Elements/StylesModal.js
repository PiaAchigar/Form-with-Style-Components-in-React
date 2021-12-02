import styled from "styled-components";

const DivWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivWindow = styled.div`
  position: relative;
  background: #fff;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 10;
  min-width: 320px;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
`;
const DivBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.4;
`;

export { DivWrapper, DivWindow, CloseBtn, DivBackground };
