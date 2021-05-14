import P from 'prop-types';
import { Post } from './styles';

export const PostCard = ({ attributes }) => {
  const { id, title, body, cover } = attributes;

  return (
    <Post key={id}>
      <img src={cover} alt={title} />
      <h2>{title}</h2>
      <p>{body}</p>
    </Post>
  );
};

PostCard.propTypes = {
  attributes: P.object.isRequired
};
