import styled from "styled-components";

export const Post = styled.div`
  background: #c1c1c1;
  border-radius: 0.6rem;
  padding: 1rem 0.8rem;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 0, 0,2);

  &:hover {
    transform: scale(1.04);
  }

  img {
    max-width: 100%;
    border-radius: 0.2rem;
  }
`;
