import { StyleButton } from './styles';

export function Button({ nextPosts, disabled = false }) {
  return (
    <StyleButton onClick={nextPosts} disabled={disabled}>Load more posts</StyleButton>
  );
}



