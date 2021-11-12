import styled from "styled-components";

export const Container = styled.a`
  padding: 2rem 2rem;
  background-color: var(--button-info-color);
  border-radius: 0.2rem;
  box-shadow: 3px 10px 20px -5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: var(--white);
  font-size: 2rem;
  letter-spacing: 0rem;
  font-weight: bold;
  transition: background-color 0.4s;
  width: 100%;
  text-align: center;
  border-radius: 20px;

  &:hover,
  &:focus {
    background-color: var(--button-info-color-hover);
  }
`;
