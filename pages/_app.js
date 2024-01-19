import Link from "next/link";
import GlobalStyle from "../styles";
import styled from "styled-components";


const StyledNav = styled.nav`
  border-bottom: solid 2px grey;
  padding: 1rem;
  background-image: url("./sky-6804245_640.jpg");
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;
//using props in styled components
const StyledButton = styled.button`
  color: ${(props) => (props.variant !== "2" ? "lightblue" : "black")};
  background-color: ${(props) =>
    props.variant === "2" ? "yellow" : "hotpink"};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: yellow;
  font-size: 2rem;
  &:hover {
    text-decoration: underline;
    color: hotpink;
    background-color: black;
    text-shadow: 3px 3px white;
    font-size: 40px;
    border-radius: 20px;
  }
  &:after {
    content: " <- Click Me!";
    font-size: 10px;
    color: white;
    text-shadow: none;
    font-weight: bold;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <StyledNav>
        <StyledList>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </StyledList>
        <StyledButton>1. Button</StyledButton>
        <StyledButton variant="2">2. Button</StyledButton>
      </StyledNav>
      <Component {...pageProps} />
    </>
  );
}
