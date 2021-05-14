import P from 'prop-types';

import { PostCard } from "../PostCard";
import { SectionPost } from "./styles";

export const Posts = ({ posts }) => {
  return (
    <SectionPost>
      {posts.map(({ id, title, body, cover }) => (
        <PostCard key={id} attributes={{ id, title, body, cover }} />
      ))}
    </SectionPost>
  );
};

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired
    }))
};
