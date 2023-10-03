import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#837453"};
  color: ${(p) => (p.color ? "#837453" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #837453;
  border-radius: 2px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid #fff;
    background-color: #837453;
  }
`;
