import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  gap: 2rem;
  border-radius: 1rem;
  padding: 0 2rem;
  position: relative;

  & + li {
    margin-top: 1rem;
  }
`;

export const ImageContainer = styled.div`
  max-width: 25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  > img {
    width: 7rem;
    position: relative;
    display: block;
    border: 1px solid var(--gray-3);
    padding: 0rem 1rem 0rem 1rem;
    margin: 0.5rem;
  }

  > h2 {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.05rem;
    color: #333;
    text-transform: uppercase;
  }
`;

export const Price = styled.div`
  > span {
    font-size: 1rem;
    color: #ccc;
  }

  > p {
    font-size: 1.2rem;
    font-weight: bold;
  }
`;
