import React from "react";
import styled from "styled-components";

interface ToggleBtn {
  themeMode: string;
  toggleTheme: () => void;
}

const Toggle = ({ themeMode, toggleTheme }: ToggleBtn) => {
  return (
    <Wrapper onClick={toggleTheme}>
      <ToggleImg
        src={themeMode === "light" ? "/img/moon.png" : "/img/sun.png"}
      />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: ${({ theme }) => theme.mode.mainBackground};
  color: ${({ theme }) => theme.mode.text};
  position: fixed;
  z-index: 999999;
  bottom: 4%;
  right: 3%;
  border: ${({ theme }) => theme.mode.borderColor};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.mode.toggleShadow};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.mode.toggleHover};
    border-color: transparent;
    color: ${({ theme }) => theme.mode.hoverText};
  }
`;

const ToggleImg = styled.img`
  width: 20px;
  height: 20px;
`;

export default Toggle;
