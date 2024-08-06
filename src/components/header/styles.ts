import styled from 'styled-components';

export const StyleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyleHeadContainer = styled.div`
  display: flex;
  width: max-content;
  margin-left: 25rem;
  position: relative;
  margin-top: 1rem;
`;

export const StyleFilterButton = styled.button`
  background-color: #d6a2e8;
  position: relative;
  display: flex;
  border-radius: 8px;
  width: 6.25rem;
  height: 2.5rem;
  color: white;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  box-shadow: 1px;
  transition: transform 0 ease-in-out;
  &:hover {
    background-color: #f0b4f0;
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const StyleDropdown = styled.ul`
  position: absolute;
  top: 2.5rem;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const StyleKkutuButton = styled.a`
  background-color: #d6a2e8;
  display: flex;
  border-radius: 8px;
  width: 6.5rem;
  height: 2.25rem;
  color: white;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  box-shadow: 1px;
  transition: transform 0 ease-in-out;
  text-decoration: none;
  margin-left: auto;
  &:hover {
    background-color: #f0b4f0;
    cursor: pointer;
    transform: scale(1.02);
  }
`;

export const StyleSearchInput = styled.input`
  display: flex;
  width: 30rem;
  margin-left: 2rem;
  padding: 0.5rem;
  &:focus {
    outline: none;
    background-color: white;
  }
`;

export const StyleSearchIcon = styled.img`
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`;
const styles = {
  StyleFilterButton,
  StyleContainer,
  StyleHeadContainer,
  StyleDropdown,
  StyleKkutuButton,
  StyleSearchInput,
  StyleSearchIcon,
};

export default styles;
