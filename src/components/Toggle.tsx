import React from "react";
import styled from "styled-components";

interface ToggleBtn {
  themeMode: string;
  toggleTheme: () => void;
}

interface ToggleWrapper {
  themeMode: string;
}

const Toggle = ({ themeMode, toggleTheme }: ToggleBtn) => {
  return (
    <Wrapper onClick={toggleTheme} themeMode={themeMode}>
      {themeMode === "dark" ? "🌚" : "🌝"}
    </Wrapper>
  );
};

const Wrapper = styled.button<ToggleWrapper>`
  background: ${({ theme }) => theme.mode.mainBackground};
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
  }
`;

export default Toggle;
