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
  attributes: P.objectOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired
    }))
};
