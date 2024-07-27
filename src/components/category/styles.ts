import styled from 'styled-components';

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadContainer = styled.div`
  display: flex;
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

const styles = {
  StyleFilterButton,
  StyleContainer,
  HeadContainer,
  StyleDropdown,
};

export default styles;
