import React, { Component } from "react";
import Portal from "../Portal";
import {
  DivWrapper,
  DivWindow,
  CloseBtn,
  DivBackground,
} from "../Elements/StylesModal";

export default class Modal extends Component {
  render() {
    const { children, toggle, active } =
      this
        .props; /*toggle y active dependen del estado del Modal, si está abierto o no - hacer toggle del "active" para que se cierre o se abra*/
    return (
      <Portal>
        {active && (
          <DivWrapper>
            <DivWindow>
              <CloseBtn onClick={toggle}>X</CloseBtn>
              <div>{children}</div>
            </DivWindow>
            <DivBackground onClick={toggle} />
            {/* El DivBackground es para cuando cliquee fuera del Modal, tb se cierre */}
          </DivWrapper>
        )}
      </Portal>
    );
  }
}
