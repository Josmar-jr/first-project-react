import { PostCard } from "../PostCard"
import { SectionPost } from "./styles"

export const Posts = ({ posts }) => {
  return (
    <SectionPost>
      {posts.map(({ id, title, body, cover }) => (
        <PostCard key={id} attributes={{ id, title, body, cover }} />
      ))}
    </SectionPost>
  )
}
