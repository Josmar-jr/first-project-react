import { useCallback, useEffect, useState } from "react";

import { loadPosts } from "../utils/load-posts";
import { Posts } from "../components/Posts";

import { SectionHome } from "../styles/home";
import { Button } from "../components/Button";
import InputSearch from "../components/InputSearch";

export const Home = () => {

  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(3);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, [])

  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {

    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)
  };

  const handleChange = event => {
    const { value } = event.target

    setSearchValue(value)
  };

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ?
    allPosts.filter(({ title }) => {
      return title.toLowerCase().includes(
        searchValue.toLowerCase()
      );
    })
    : posts;

  return (
    <SectionHome>
      {!!searchValue && (
        <h1>Search: {searchValue}</h1>
      )}

      <InputSearch handleChange={handleChange} searchValue={searchValue} />

      {filteredPosts.length === 0 ? (
        <p>Não existem Posts!</p>
      ) : (
        <Posts posts={filteredPosts} />
      )}

      {!searchValue && (
        <Button
          nextPosts={loadMorePosts}
          disabled={noMorePosts}
        />
      )}
    </SectionHome>
  );
};


