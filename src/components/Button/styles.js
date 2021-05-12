import styled from "styled-components";

export const StyleButton = styled.button`
  width: 100%;
  height: 2.6rem;

  font-size: 1.2rem;
  font-weight: bold;

  margin-top: 3rem;
  background: linear-gradient(-180deg, #bcc5ce 0%, #929ead 98%),
    radial-gradient(
      at top left,
      rgba(255, 255, 255, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
  background-blend-mode: screen;
  border-radius: 8px;
  transition: 0.3s ease;

  &:hover {
    filter: brightness(0.8);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
