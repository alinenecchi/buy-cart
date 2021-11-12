import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: #fff;
  width: 100%;
  padding: 2rem;
  text-align: center;
  border-bottom: 2px solid var(--border-color);
  position: relative;

  > a {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    color: #333;
    font-size: 1.4rem;
    color: var(--button-info-color);
    transition: all 0.4s;

    &:hover,
    &:focus {
      color: var(--button-info-color-hover);
      transform: translateY(-18px);
    }
  }

  > h1 {
    font-size: 1.6rem;
  }
`;

export const FooterCart = styled.footer`

  .line {
    display: grid;
    grid-template-columns: 1fr 1fr;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
    font-size: 2rem;
    font-weight: 700;
    font-family: Poppins;
    line-height: 2rem;
    padding: 2rem 0 2rem 0;
  }

    > small {
      position: relative;
      font-size: 1.5rem;
      letter-spacing: 0.07rem;
      font-weight: regular;
      width: 100%;
      display: flex;
      align-items: center;
      height: 3rem;
      justify-content: center;
      color: var(--dark-green)
      border: 1px solid var(--light-green);
      background: var(--light-green);
      border-radius: 30px;
    }
    > span {
      font-size: 1.6rem;
      font-weight: bold;
    }
    .button {
      padding-top: 1rem;
    }
`;

